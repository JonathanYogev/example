# EKS-CI-CD-MENTORSHIP

This file outlines the step-by-step plan to build and deploy a complete Kubernetes project on AWS EKS with a full CI/CD pipeline.

## Project Goal

A fully functional Node.js client-server app with CI/CD using GitHub Actions, Helm, and EKS — including staging and production environments and basic testing during CI.

---

## Project Plan

### Phase 1: Project Setup & Prerequisites (Current)
- [X] Outline complete project plan in `gemini.md`.
- [ ] Install and configure required tools.
- [ ] Set up AWS account and required IAM permissions.

### Phase 2: Application Development & Containerization
- [ ] Create a simple Node.js REST API (server).
- [ ] Create a simple Node.js client to consume the API.
- [ ] Add basic Jest tests for both client and server.
- [ ] Create `Dockerfile` for the server.
- [ ] Create `Dockerfile` for the client.

### Phase 3: AWS Infrastructure Setup
- [ ] Create two ECR repositories for our Docker images.
- [ ] Create an EKS cluster using `eksctl` (Free Tier-friendly).
- [ ] Configure `kubectl` to connect to the new cluster.

### Phase 4: Kubernetes Deployment with Helm
- [ ] Create a Helm chart for the server application.
- [ ] Create a Helm chart for the client application.
- [ ] Implement Kubernetes health probes (liveness/readiness).
- [ ] Deploy the applications to a `staging` namespace using Helm.

### Phase 5: CI/CD with GitHub Actions
- [ ] Create a GitHub Actions workflow file.
- [ ] **Workflow Step 1: Test** - Run linting and Jest tests on every push.
- [ ] **Workflow Step 2: Build & Push** - Build and push Docker images to ECR.
- [ ] **Workflow Step 3: Deploy to Staging** - Automatically deploy to the `staging` environment.
- [ ] **Workflow Step 4: Deploy to Production** - Require manual approval for production deployment.
- [ ] Configure all required GitHub Secrets for AWS and Kubernetes.

### Phase 6: Verification & Wrap-up
- [ ] Verify the deployments in both `staging` and `production`.
- [ ] Document the final project structure and usage.

---

## Prerequisites & Setup

### 1. Required Tools
Before we start, you need to install and configure the following tools on your local machine:
- **AWS CLI**: For interacting with your AWS account.
- **Node.js & npm**: For developing the client and server applications.
- **Docker Desktop**: For building and running containers locally.
- **kubectl**: The Kubernetes command-line tool.
- **Helm**: The package manager for Kubernetes.
- **eksctl**: The official CLI for creating and managing EKS clusters.

### 2. AWS Account & IAM Permissions
- **AWS Account**: You need an AWS account with access to the console.
- **IAM User**: Create an IAM User with **programmatic access** and **AdministratorAccess**. While not best practice for production, using AdministratorAccess for this educational project simplifies permissions.
- **AWS Credentials**: Configure your AWS CLI with the credentials of the IAM user you just created by running `aws configure`. This will store your credentials locally, allowing the tools to interact with your AWS account.

---
