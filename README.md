# Introduction
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

