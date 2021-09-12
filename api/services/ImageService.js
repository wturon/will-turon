const CosmosClient = require("@azure/cosmos").CosmosClient;
const config = require("../config");
const dbContext = require("../data/databaseContext");

const { endpoint, key, databaseId, containerId } = config;
const client = new CosmosClient({ endpoint, key });
const database = client.database(databaseId);
const container = database.container(containerId);

class ImageService {
  constructor() {}

  initDb = async () => {
    await dbContext.create(client, databaseId, containerId);
  };

  getContainers = async (querySpec) => {
    return await container.items.query(querySpec).fetchAll();
  };

  printHello() {
    console.log("hello");
  }
}

module.exports = ImageService;
