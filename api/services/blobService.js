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

exports.listBlob = listBlob;
