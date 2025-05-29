output "alb_dns_name" {
  value       = aws_lb.app_alb.dns_name
  description = "DNS name of the Application Load Balancer"
}

output "rds_endpoint" {
  value       = aws_db_instance.postgres.endpoint
  description = "Endpoint of the RDS instance"
}
