terraform {
  required_providers {
    aws = {
      source = "hashicorp/aws"
    }
  }

  required_version = ">=0.14.9"
  backend "s3" {
    bucket = "wturon-personal-remote-state"
    key    = "states/terraform.tfstate"
    region = "us-east-2"
  }

}

provider "aws" {
  region = "us-east-2"
}
