resource "aws_amplify_app" "frontend" {
  name         = "will-turon-fe"
  repository   = "https://github.com/wturon/will-turon"
  access_token = var.REPO_ACCESS_TOKEN

  # The default build_spec added by the Amplify Console for React.
  build_spec = <<-EOT
    version: 0.1
    frontend:
      phases:
        preBuild:
          commands:
            - cd web
            - npm install
            - cd ..
        build:
          commands:
            - cd web
            - npm run build
            - cd ..
      artifacts:
        baseDirectory: web/build
        files:
          - '**/*'
      cache:
        paths:
          - node_modules/**/*
  EOT

  # The default rewrites and redirects added by the Amplify Console.
  custom_rule {
    source = "/<*>"
    status = "404"
    target = "/index.html"
  }

  environment_variables = {
    ENV = "dev"
  }
}


resource "aws_amplify_branch" "main" {
  app_id      = aws_amplify_app.frontend.id
  branch_name = "main"
  framework   = "React"
  stage       = "PRODUCTION"
}
