terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.0"
    }
  }
  backend "s3" {
    bucket = "wturon-personal-remote-state"
    key    = "states/terraform.tfstate"
    region = "us-east-2"
  }

}

provider "aws" {

}
