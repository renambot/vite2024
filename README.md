# Introduction

<img width="600" alt="Screenshot 2024-06-18 at 1 28 04 PM" src="https://github.com/renambot/vite2024/assets/5595452/a5bdb379-5764-4ba4-a453-37d4dffbe9e8">

 - frontend and server are in separate directories, called workspaces
 - each workspace has its own package.json
 - each workspace has its own Dockfile to build a docker image
 - the deployment folder has a docker-compose.yml to run the project as a whole
   - frontend is hosted using ngxinx web server, expose to the network
   - API server is hosted using nodejs, running only on 'localhost'

# Install

 - cd project-root
 - npm install

# Development

## API server

 - run API server in dev mode from the project root
 - Reloads on file changes
 - npm run server:dev

## Frontend

 - run frontend in dev mode from the project root
 - Reloads on file changes
 - npm run frontend:dev

# Build

 - Build everything from the project root
 - npm run build

# Clean

 - Clean everything from the project root
 - rm -fr node_modules frontend/node_modules frontend/dist server/build

