# Use the standard Node.js image
FROM node:20

# Create app directory in the container
WORKDIR /home/node/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install app dependencies
RUN npm i

# Copy the rest of the application code
COPY . .

# Your app binds to port 3000, so you'll use the EXPOSE instruction to have it mapped by the docker daemon
EXPOSE 3000

RUN npm run build

CMD ["node", "dist/index.js"] 
