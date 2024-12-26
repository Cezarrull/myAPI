const { Router } = require("express");

const UsersControler = require("../controllers/UsersControllers");

const usersRoutes = Router();

const userController = new UsersControler()

usersRoutes.post("/", userController.create);

module.exports = usersRoutes;