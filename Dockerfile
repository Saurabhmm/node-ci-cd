# Step 1: Use official Node.js base image
FROM node:18

# Step 2: Set working directory inside container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the app files
COPY . .

# Step 6: Expose port 3000 for the app
EXPOSE 3000

# Step 7: Command to run the app
CMD ["npm", "start"]
