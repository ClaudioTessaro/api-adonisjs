"use strict";

const FileController = require("../app/Controllers/Http/FileController");

const Route = use("Route");

Route.post("users", "UserController.store").validator("User");
Route.post("sessions", "SessionController.store");

Route.post("password", "ForgotPasswordController.store");
Route.put("password", "ForgotPasswordController.update");

Route.get("/file/:id", "FileController.show");

Route.group(() => {
  Route.post("/files", "FileController.store");

  Route.resource("projects", "ProjectController").apiOnly();
  Route.resource("projects.tasks", "TaskController").apiOnly();
}).middleware(["auth"]);
