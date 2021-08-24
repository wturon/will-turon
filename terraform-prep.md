az group create -n tfstate-rg -l eastus2

az storage account create -n willturontfstate -g tfstate-rg -l eastus2 --sku Standard_LRS

az storage container create --account-name willturontfstate -n tfstatedevops

az ad sp create-for-rbac --name willturontf2
