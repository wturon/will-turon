const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 8080;

app.use(cors());

const {
  BlobServiceClient,
  StorageSharedKeyCredential,
} = require("@azure/storage-blob");
const { v1: uuidv1 } = require("uuid");

const listBlob = async () => {
  const account = "wttest";
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
  for await (const blob of containerClient.listBlobsByHierarchy("/")) {
    blobsArray.push(blob);
  }
  return blobsArray;
};

app.get("/images", (req, res) => {
  listBlob()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((ex) => console.log(ex.message));
  console.log("\nListing blobs...");
});

app.listen(PORT, () =>
  console.log(`We're live on port http://localhost:${PORT}`)
);
