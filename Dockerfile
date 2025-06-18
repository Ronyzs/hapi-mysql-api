# Use official Node.js LTS image
FROM node:18-alpine

# Set working directory
WORKDIR /app/api/

# Copy package files and install dependencies
COPY package*.json ./

# Install only production dependencies
RUN npm install --production

# Copy the rest of the application code
COPY . .

# Expose the port your Hapi server listens on (default 3000)
EXPOSE 3000

# Start the server
CMD ["npm", "run", "start"]