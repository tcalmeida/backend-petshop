import express from "express";

// Controllers

// Middlewares

// Validations

// Router
const routes = express.Router();

// Routes
//Users
routes.get("/user");
routes.get("/user/:id");
routes.post("/user");
routes.put("/user/:id");
routes.delete("/user/:id");

//Workers
routes.get("/worker");
routes.get("/worker/:id");
routes.post("/worker");
routes.put("/worker/:id");
routes.delete("/worker/:id");

//Services
routes.get("/service");
routes.get("/service/:id");
routes.post("/service");
routes.put("/service/:id");
routes.delete("/service/:id");

//Reservations
routes.get("/reservation");
routes.get("/reservation/:id");
routes.post("/reservation");
routes.put("/reservation/:id");
routes.delete("/reservation/:id");

export { routes };
