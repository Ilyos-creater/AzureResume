# Azure Resume Challenge

## Overview
This project is part of the **Azure Resume Challenge**, designed to showcase cloud skills by building and deploying a personal resume website using Microsoft Azure services. The project incorporates cloud infrastructure and automation.

## Features
- **Static Resume Website** hosted on **Azure Storage (Static Website Hosting)**
-  **HTTPS enabled**
- **Azure Functions** to track visitor count
- **Cosmos DB** for storing visitor statistics
- **GitHub Actions** for automated deployments

## Technologies Used
- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Azure Functions (Python/Node.js)
- **Database**: Azure Cosmos DB
- **CI/CD**: GitHub Actions

## Deployment Steps
### 1. Clone the Repository
```bash
git clone https://github.com/Ilyos-creater/azure-resume.git
cd azure-resume
```

### 2. Deploy Static Website
Upload your website files to Azure Storage:
```bash
az storage blob upload-batch -s ./frontend -d \$web --account-name <storage_account_name>
```

### 3. Deploy Azure Functions
Navigate to the backend directory and deploy the function:
```bash
cd backend
func azure functionapp publish <your_function_app>
```

### 4. Set Up GitHub Actions Secrets
- **AZURE_CREDENTIALS**: Service Principal credentials
- **COSMOS_DB_CONNECTION_STRING**: Connection string for Cosmos DB

## Live Website
Check out the deployed site: [[https://happy-bush-01f706410.6.azurestaticapps.net](https://happy-bush-01f706410.6.azurestaticapps.net)]


## License
This project is open-source under the MIT License.

