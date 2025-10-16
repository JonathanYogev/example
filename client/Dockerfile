# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install any needed packages
RUN npm install

# Bundle app source
COPY . .

# Define the command to run the app
# This will be overridden in the Kubernetes manifest for a real-world scenario,
# but it's good for testing the image.
CMD [ "npm", "start" ]
