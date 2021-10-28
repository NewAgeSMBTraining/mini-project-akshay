// var express = require('express');
// import { route } from './users';
import express from "express";
const router = express.Router();
const services = require("../Services/render-service");
const controller = require("../controller/controller");

/**
 *@description Root route
 *@method GET
 */
router.get("/", services.mainRoutes);
/**
 *@description add employee route
 *@method GET
 */
router.get("/add-employee", services.addEmployee);
/**
 *@description update employee
 *@method GET
 */
router.get("/update-employee", services.updateEmployee);

//API
router.post("/api/createuser", controller.create);

//Api
router.post("/api/users", controller.create);
router.get("/api/users", controller.find);
router.put("/api/users/:id", controller.update);
router.delete("/api/users/:id", controller.delete);
router.post("/login",controller.login)
router.get("/getauser/:username",controller.findbiEmail)

module.exports = router;
