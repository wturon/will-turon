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
  location = "West Europe"
}

resource "azurerm_app_service_plan" "wt-appservice" {
  name                = "wt-appserviceplan"
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
  name                = "will-turon-app-service"
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