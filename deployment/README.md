# Frontend

 - cd frontend
 - docker build -t vite2024-frontend .
 - Run standalone:
   - docker run --rm -p 3000:3000 vite2024-frontend


# API server

 - cd server
 - docker build -t vite2024-server .
 - Run standalone:
   - docker run --rm -p 4000:4000 vite2024-server

# Compose

 - All in one command
 - docker compose up --remove-orphans
