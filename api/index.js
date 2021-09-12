const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 8080;

const CosmosClient = require("@azure/cosmos").CosmosClient;
const config = require("./config");
const dbContext = require("./data/databaseContext");

app.use(cors());

const { endpoint, key, databaseId, containerId } = config;

const client = new CosmosClient({ endpoint, key });

const database = client.database(databaseId);
const container = database.container(containerId);

// Make sure Tasks database is already setup. If not, create it.
console.log("Hello!");

const initDb = async () => {
  await dbContext.create(client, databaseId, containerId);
};

const {
  BlobServiceClient,
  StorageSharedKeyCredential,
} = require("@azure/storage-blob");
const { ConflictResolutionMode } = require("@azure/cosmos");

const listBlob = async () => {
  const account = "willturonstorageaccount";
  const sharedKeyCredential = new StorageSharedKeyCredential(
    account,
    process.env.AZURE_STORAGE_CONNECTION_STRING
  );

  const blobServiceClient = new BlobServiceClient(
    `https://${account}.blob.core.windows.net`,
    sharedKeyCredential
  );
  console.log("Azure Blob storage v12 - JavaScript quickstart sample");
  const containerClient = blobServiceClient.getContainerClient("images");
  // List the blob(s) in the container.
  let blobsArray = [];
  for await (const blob of containerClient.listBlobsFlat()) {
    const blockBlobClient = containerClient.getBlockBlobClient(blob.name);
    blobsArray.push({ name: blockBlobClient.name, url: blockBlobClient.url });
  }
  console.log(blobsArray);
  return blobsArray;
};

app.get("/images", (req, res) => {
  listBlob()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((ex) => console.log(ex.message));
});

const getContainers = async (querySpec) => {
  return await container.items.query(querySpec).fetchAll();
};

app.get("/items", (req, res) => {
  console.log("hello /test");

  console.log(`Querying container: Items`);

  // query to return all items
  const querySpec = {
    query: "SELECT * from c",
  };

  // read all items in the Items container
  const { resources: items } = getContainers(querySpec);

  items.forEach((item) => {
    console.log(`${item.id} - ${item.description}`);
  });
});

const createItem = async (newItem) => {
  const { resource: createdItem } = await container.items.create(newItem);
  console.log(
    `\r\nCreated new item: ${createdItem.id} - ${createdItem.description}\r\n`
  );
};

app.post("/items", (req, res) => {
  initDb();
  console.log("posting to /items");
  const newItem = {
    id: "5",
    category: "fun",
    name: "Cosmos DB",
    description: "Complete Cosmos DB Node.js Quickstart ⚡",
    isComplete: false,
  };

  createItem(newItem);
});

const deleteItem = async (id, category) => {
  await container.item(id, category).delete();
  console.log(`Deleted item with id: ${id}`);
};

app.delete("/items/:id", (req, res) => {
  /**
   * Delete item
   * Pass the id and partition key value to delete the item
   */
  deleteItem(req.params.id, "fun");
});

app.listen(PORT, () =>
  console.log(`We're live on port http://localhost:${PORT}`)
);
