const express = require("express");
const router = express.Router();
const service=require("../services/college");
router.get("/", service.getAll);
router.get("/:id", service.getById);
router.get("/name/:name",service.getByName);
router.get("/count/bystates",service.getStateWiseCollegeCount);
router.get("/state/:state", service.getByState);
module.exports = router;
