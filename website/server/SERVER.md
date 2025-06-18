# Backend (Server Side)

## Description
 Created a server side directory which contains configurations of node.js and express

## database-connection.js and app.js
database connection sets up connection and app starts server more in depth commentary in both files

## 1. Models
Create preset data models for users to create

## 2. Middleware
Functions that run during the request-response cycle. Preprocesses request before they hit the routes and controller.

Usually have signitures of function name(req, res, next)

which either sends an error message or next() response

## 3. Routes
URL endpoints which map them to the controllers. uses GET /users and Post /login and paths to controller. Look at route directory for example

## 4. Controllers
Contains request handlers that process input and return responses acts as a bridge for route and services. Look at controllers for examples

## 5. Services
Contains business logic and interacts with databases. Manipulates databases and logic.

## 6. Utils
Contains reusable functions for example hashing passwords for profile creation and forgot password 

Make sure to modularize functionality and reusabilty as we go on.

## Querying or Manipulating Data
When you are querying data or manipulating data you want to reconnect to database