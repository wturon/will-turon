# Personal Website

## Github Secrets

These are the secrets that need to be defined before the pipelines will run succesfully. Navigate to your preferred repo. Settings > Secrets.

Start by running the following command to create a service principal and using the output for the values of secrets 1 through 4.

_Note that this SP will have contributer level access to your entire subscription..._

`az ad sp create-for-rbac --name willturontf2`

1. **AZURE_AD_CLIENT_ID**

   Used in `InfraDeploy.yml` for terraform

2. **AZURE_AD_CLIENT_SECRET**

   Used in `InfraDeploy.yml` for terraform

3. **AZURE_AD_TENANT_ID**

   Used in `InfraDeploy.yml` for terraform

4. **AZURE_SUBSCRIPTION_ID**

   Used in `InfraDeploy.yml` for terraform

5. **API_URI**

   Define the name of the base URI for your API. Unless otherwise specified this will be

   > API_APP_SERVICE_NAME.azurewebsites.net

   This will be referenced in the `deployment-web.yml` and injected into the react app's `index.html` file

6. **AZURE_CREDENTIALS**

   Used for `azure/login@v1` action in the deployment pipelines. The contents of this secret should be the entire output of the following command

   `az ad sp create-for-rbac --name "deploymentSP" --role contributor --scopes /subscriptions/<YOUR_SUBSCRIPTION_ID> --sdk-auth`

   Yeah I'm aware this seems redundant. I'm pretty sure you can use the same service principal for terraform and `azure/login@v1`.

7. **COSMOS_KEY**

   Access key for cosmos instance

---

## Infrastructure

Before the `terraform.yml` pipeline can run there needs to be a storage account provisioned to hold the terraform remote state.

1. **Create a resource group that will hold the storage account**

   `az group create -n tfstate-rg -l eastus2`

2. **Create the storage account**

   `az storage account create -n willturontfstate -g tfstate-rg -l eastus2 --sku Standard_LRS`

3. **Create your container**

   `az storage container create --account-name willturontfstate -n tfstatedevops`
