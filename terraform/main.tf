terraform {
  backend "azurerm" {
    resource_group_name  = "tfstate-rg"
    storage_account_name = "willturontfstate"
    container_name       = "tfstatedevops"
    key                  = "tfstatedevops.tfstate"
  }
}

provider "azurerm" {
  version = "~>2.0"
  features {}
}

data "azurerm_client_config" "current" {}

resource "azurerm_resource_group" "tf-wt-rg" {
  name     = "tf-wt-rg"
  location = "eastus"
}

resource "azurerm_app_service_plan" "wt-appservice" {
  name                = "wt-appservice"
  location            = azurerm_resource_group.tf-wt-rg.location
  resource_group_name = azurerm_resource_group.tf-wt-rg.name
  kind                = "Linux"
  reserved            = true

  sku {
    tier = "Standard"
    size = "B1"
  }
}

resource "azurerm_app_service" "will-turon-app-service" {
  name                = "willturon"
  location            = azurerm_resource_group.tf-wt-rg.location
  resource_group_name = azurerm_resource_group.tf-wt-rg.name
  app_service_plan_id = azurerm_app_service_plan.wt-appservice.id

  site_config {
    linux_fx_version = "NODE|12-lts"
    app_command_line = "pm2 serve /home/site/wwwroot --no-daemon --spa"
  }

  app_settings = {
    "WEBSITE_WEBDEPLOY_USE_SCM" = "TRUE"
  }
}

resource "azurerm_app_service" "will-turon-app-service-api" {
  name                = "willturon-api"
  location            = azurerm_resource_group.tf-wt-rg.location
  resource_group_name = azurerm_resource_group.tf-wt-rg.name
  app_service_plan_id = azurerm_app_service_plan.wt-appservice.id

  site_config {
    linux_fx_version = "NODE|12-lts"
  }
}

resource "azurerm_storage_account" "wt-storage-account" {
  name                     = "willturonstorageaccount"
  resource_group_name      = azurerm_resource_group.tf-wt-rg.name
  location                 = azurerm_resource_group.tf-wt-rg.location
  account_tier             = "Standard"
  account_replication_type = "LRS"
}

resource "azurerm_storage_container" "images" {
  name                  = "images"
  storage_account_name  = azurerm_storage_account.wt-storage-account.name
  container_access_type = "container"
}