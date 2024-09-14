# Cookbook:: web_app_docker
# Recipe:: default

#UPDATING ALL THE PACKAGES FOR SMOOTH INSTALLATION
execute 'update_all_packages' do
  command 'yum update -y'
  action :run
end

#INSTALLING DOCKER
package "docker" do
  action :install
end

#ENABLING AND STARTING THE DOCKER SERVICE
service "docker" do
  action [:enable, :start]
end

#PULLING DOCKER IMAGE FROM MY DOCKERHUB ACCOUNT
execute "pull docker image" do
  command "docker pull tusharsharma01/web-app:latest"
  not_if "docker images | grep tusharsharma01/web-app"
end

#RUNNING THE DOCKER CONTAINER FOR THE WEB APPLICATION
 execute "run docker container" do
  command "docker run --name web-app-container -d -p 8080:80 tusharsharma01/web-app:latest"
  not_if "docker ps | grep web-app-container"
 end

# Copyright:: 2024, The Authors, All Rights Reserved.
