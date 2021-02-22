const express = require("express");
const router = express.Router();
const service = require("../services/student");
router.get("/", service.getAll);
router.get("/:id", service.getById);
router.get("/college/:collegeId", service.getByCollege);
module.exports = router;