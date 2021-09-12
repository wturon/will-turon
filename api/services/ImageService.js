const CosmosClient = require("@azure/cosmos").CosmosClient;
const config = require("./config");
const dbContext = require("./data/databaseContext");

const { endpoint, key, databaseId, containerId } = config;

const client = new CosmosClient({ endpoint, key });

const database = client.database(databaseId);
const container = database.container(containerId);

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

const initDb = async () => {
  await dbContext.create(client, databaseId, containerId);
};

const getContainers = async (querySpec) => {
  return await container.items.query(querySpec).fetchAll();
};

class ImageService {
  constructor() {}

  printHello() {
    console.log("hello");
  }
}
