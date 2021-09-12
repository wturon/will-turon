// @ts-check

const config = {
  endpoint: "https://wt-test.documents.azure.com:443/",
  key: "pAJB578sH18EvAeeWzF4eYHI41dwtg2A31OHemzVx4rUlC5DBqWBzJfUPGmhr6nMbqrqmEshOwvwsVeVdfv2SA==",
  databaseId: "Tasks",
  containerId: "Items",
  partitionKey: { kind: "Hash", paths: ["/category"] },
};

module.exports = config;
