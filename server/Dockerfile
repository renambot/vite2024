FROM node:20-alpine

WORKDIR /app

COPY package.json ./

# Install dependencies
RUN npm install

# Copy the rest of project files into this image
COPY . .

# Build
RUN npm run build

# Expose application port
EXPOSE 4000

# Start the application
CMD npm start
