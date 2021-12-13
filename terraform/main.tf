module "namespace" {
  source = "github.com/chiel/project-namespace?ref=v0.2.0"

  name       = "personal"
  ghcr_token = var.ghcr_token
  ghcr_user  = var.ghcr_user
  kube_host  = var.kube_host
}

resource "github_repository" "site" {
  name                   = "site"
  visibility             = "public"
  delete_branch_on_merge = true
  has_downloads          = false
  has_issues             = true
  has_projects           = false
  has_wiki               = false
}

resource "github_actions_secret" "kubeconfig" {
  repository      = github_repository.site.name
  secret_name     = "KUBECONFIG"
  plaintext_value = module.namespace.kubeconfig
}
