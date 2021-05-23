# STAMURAI ASSIGNMENT

This project has been created as an assignment for an interview process.

## REQUIREMENTS

TASKLIST (BACKEND)

Create a task-list dashboard for a user in which:

- users can create/view/edit their task list with Task title and description, approvedby(Array), and any other fields you think should be there.
- Create 1 admin user. Admin can perform the following additional tasks
- Create new users
- view all users
- view tasks and task status of all users
- Assign/remove reviewers for a user
- Admin can also assign himself as a reviewer for some users
- Admin is a user himself
- Admin can assign role of reviewer to multiple people for multiple users
- A user can have multiple reviewers
- Reviewer can view users assigned to him and their tasks, task status and approve a task
- Only a reviewer can mark a task as approved, not even admin (Unless he is also a reviewer for the user)

Stack:

- Mongodb, mongoose
- nodejs, Express/fastify/….
- jwt based authentication
- role based authorization

Bonus

- Typescript
- e2e, unit tests
- Docker, Docker-compose
- UI scales well to mobile and desktop views
- Frontend Reactjs/Angular 11

## BACKEND

Detailed postman documentation of all the APIs can be found on the following link: https://documenter.getpostman.com/view/7961149/TzXtK1Ym

Command to run the backend code

```(javascript)
cd backend
yarn
yarn run prod
```

OR

```
docker-compose up or docker compose up
```

Application will run on port 8080. All the APIs can be accessed using the following URL:
http://localhost:8080/

To check if the application is up and running, hit the following URL: http://localhost:8080/healthz

## FRONTEND

Front-end could not be completed due to lack of time. It won't depict anything much at the moment.

Command to run the frontend

```
cd frontend
yarn
yarn run start
```
