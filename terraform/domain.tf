resource "digitalocean_record" "kunkels_me" {
  for_each = {
    "@"   = var.ingress_ip
    "www" = var.ingress_ip
  }

  domain = "kunkels.me"
  type   = "A"
  name   = each.key
  ttl    = 3600
  value  = each.value
}
