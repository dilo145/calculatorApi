
# Calculator API



## Team Members

- Drilon LIMANI

- Getoar LIMANI



## Local Development



You have two options to run the project locally:



### 1. Using Docker Compose (Recommended)

```bash

# Start the application

# Optional -d flag to run in detached mode

docker compose up -d



# Stop the application

docker compose down

```



### 2. Using npm (Local Installation)

```bash

# Install dependencies

npm ci



# Start the application

npm run start

```



The API will be available at `http://localhost:3000`



## CI (Continuous Integration)



Before submitting a Pull Request, run these commands locally to reproduce the CI steps:



```bash

# Install dependencies

npm clean-install



# Run linting checks

npm run lint



# Execute all tests

npm test

```



## CD (Continuous Delivery)



### Artifact

The CD pipeline produces a Docker image as the deliverable artifact.

- Type: Docker Image

- Format: `[your_dockerhub_name]/[repository_name]:[tag]`



### Deployment Guide for New Team Members (Damien and Marion)



To deploy a new version of the application:



1. **Prerequisites**

- Ensure you have access to the GitHub repository

- Verify that DOCKERHUB_TOKEN is set in the repository secrets



2. **Deploy a New Version**

```bash

# 1. Create and push a new tag

git tag v1.0.0

git push origin v1.0.0

```



The deployment will automatically:

- Build a new Docker image

- Push it to Docker Hub

- Tag it with the version number



3. **Verify Deployment**

- Check the Actions tab in GitHub to monitor the deployment

- Verify the new image is available on Docker Hub



## API Documentation



Available endpoints:

- `/add?a={number}&b={number}`

- `/subtract?a={number}&b={number}`

- `/multiply?a={number}&b={number}`

- `/divide?a={number}&b={number}`

- `/power?a={number}&b={number}`