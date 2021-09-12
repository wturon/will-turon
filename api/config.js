// @ts-check

const config = {
  endpoint: "https://wt-test.documents.azure.com:443/",
  key: process.env.COSMOS_KEY,
  databaseId: "Tasks",
  containerId: "Items",
  partitionKey: { kind: "Hash", paths: ["/category"] },
};

module.exports = config;
