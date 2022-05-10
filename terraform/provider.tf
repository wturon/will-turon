terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      Version = "~>3.27"
    }
  }

  required_version = ">=0.14.9"
  backend "s3" {
    bucket = "wturon-personal-remote-state"
    key    = "states/terraform.tfstate"
    region = "east-us-2"
  }

}

provider "aws" {
  version = "~>3.0"
  region  = "east-us-2"
}
