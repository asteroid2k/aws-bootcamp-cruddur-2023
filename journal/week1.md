# Week 1 — App Containerization

## Required Tasks

1. Backend

   - Install deps, set env vars and run locally

     `pip3 install -r ./backend-flask/requirements.txt`

     `export BACKEND_URL="*" && export FRONTEND_URL="*"`

     `cd ./backend-flask && python3 -m flask run --host=0.0.0.0 --port=4567`

   - Built and run backend docker image  
     `docker build -t backend-flask ./backend-flask`

     `docker run --rm -d -p 4567:4567 -e BACKEND*URL='*' -e FRONTEND*URL='*' backend-flask`

     ![architectural diagram](assets/week1/local_backend.png)

2. Frontend

   - Install deps, set env vars and run frontend locally

     `cd frontend-react-js && npm i`

     `export REACT_APP_BACKEND_URL="localhost:4567" && npm start`

   - Built and run frontend docker image  
     `docker build -t frontend-react-js ./frontend-react-js`

     `docker run --rm -d -p 3000:3000 -e REACT_APP_BACKEND_URL=“localhost:4567” frontend-react-js`

     ![architectural diagram](assets/week1/local_frontend.png)

3. Docker compose

   `docker compose up`

   ![architectural diagram](assets/week1/exposed_stack.png)

## Challenges

- Push images to Docker hub

  `docker tag aws-bootcamp-cruddur-2023-backend-flask asteroid2k/crudder-backend:0.1.0`  
  `docker push asteroid2k/crudder-backend:0.1.0`

  `docker tag aws-bootcamp-cruddur-2023-frontend-react-js asteroid2k/crudder-frontend:0.1.0`  
  `docker push asteroid2k/crudder-frontend:0.1.0`

  ![architectural diagram](assets/week1/dockerhub_images.png)

- Health checks in docker compose

  Added health checks for both services using curl. Specified parameters i.e timeout, interval etc in the [docker compose file](/docker-compose.yml) for regular pinging.
