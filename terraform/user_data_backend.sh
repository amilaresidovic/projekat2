#!/bin/bash
exec > /var/log/user-data.log 2>&1
set -x

echo "Početak User Data skripte za backend" >> /var/log/user-data.log
sudo yum update -y
sudo yum install -y docker git
sudo systemctl start docker
sudo systemctl enable docker
sudo usermod -aG docker ec2-user
sudo curl -L "https://github.com/docker/compose/releases/download/v2.20.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
git clone ${repo_url} /home/ec2-user/projekat2
cd /home/ec2-user/projekat2/backend
export DATABASE_URL=postgresql://${db_username}:${db_password}@${rds_endpoint}/${db_name}
sudo -E docker-compose build
sudo -E docker-compose up -d
echo "Završetak User Data skripte za backend" >> /var/log/user-data.log
