resource "digitalocean_domain" "kunkels_me" {
  name = "kunkels.me"
}

# subdomains
resource "digitalocean_record" "kunkels_me" {
  for_each = {
    "@"   = var.ingress_ip
    "www" = var.ingress_ip
  }

  domain = digitalocean_domain.kunkels_me.id
  type   = "A"
  name   = each.key
  ttl    = 3600
  value  = each.value
}
