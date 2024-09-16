# Project Description
# Title: Automated Web Application Deployment with Chef, Docker, and Git

# Overview:
This project demonstrates the integration of Chef, Docker, and Git to automate the deployment of a web application. The aim is to streamline the deployment process, ensuring consistency, efficiency, and scalability across different environments. By leveraging Chef for configuration management, Docker for containerization, and Git for version control, the project showcases a modern DevOps approach to managing web applications.

# Objectives:

Automate Infrastructure Setup: Use Chef to automate the installation and configuration of Docker on the target server.
Containerize the Application: Employ Docker to create a container for the web application, ensuring it runs consistently across various environments.
# Version Control: Utilize Git for tracking changes to configuration files and scripts, facilitating collaboration and maintaining a history of modifications.
# Project Details

1. Prerequisites
# Chef Workstation: Required for authoring and testing Chef cookbooks. Install from Chef Workstation Installation Guide.
# Docker: Needed to run the containerized application. Follow Docker's installation guide for Linux.
# Git: Used for version control. Install Git from Git Installation Guide.

2. Project Components
# a. Chef Configuration
Purpose: Automates Docker installation and web application deployment.
Location: cookbooks/your-cookbook/recipes/default.rb
# Key Actions:
Updates system packages.
Installs and configures Docker.
Pulls the Docker image from Docker Hub.
Runs the Docker container for the web application.

# b. Docker Container
Purpose: Containerizes the web application for consistent deployment.
Location: Dockerfile
# Key Actions:
Uses Node.js LTS version as the base image.
Installs http-server and copies the application files.
Exposes port 8080 and starts the web server.
