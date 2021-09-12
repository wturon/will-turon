const express = require("express");
const { listBlob } = require("../services/blobService");
const ImageService = require("../services/ImageService");
const router = express.Router();

router.get("", (req, res) => {
  listBlob()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((ex) => console.log(ex.message));
});

router.get("/items", (req, res) => {
  console.log("hello /test");

  console.log(`Querying container: Items`);

  // query to return all items
  const querySpec = {
    query: "SELECT * from c",
  };

  const imService = new ImageService();
  // read all items in the Items container
  imService.getContainers(querySpec).then((items) => {
    items.map((item) => {
      console.log(`${item.id} - ${item.description}`);
    });
  });
});

const createItem = async (newItem) => {
  const { resource: createdItem } = await container.items.create(newItem);
  console.log(
    `\r\nCreated new item: ${createdItem.id} - ${createdItem.description}\r\n`
  );
};

router.post("/items", (req, res) => {
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

router.delete("/items/:id", (req, res) => {
  deleteItem(req.params.id, "fun");
});

module.exports = router;
