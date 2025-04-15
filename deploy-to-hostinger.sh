#!/bin/bash

# Deployment script for Hostinger
echo "Starting deployment to Hostinger..."

# Build the Next.js application
echo "Building the application..."
npm run build

# Create a deployment package
echo "Creating deployment package..."
mkdir -p deployment
cp -r .next deployment/
cp -r public deployment/
cp package.json deployment/
cp server.js deployment/
cp .env.production deployment/.env

# Compress the deployment package
echo "Compressing deployment package..."
cd deployment
zip -r ../finonest-deployment.zip .
cd ..

echo "Deployment package created: finonest-deployment.zip"
echo "Upload this file to your Hostinger hosting account."
echo "Done!"
