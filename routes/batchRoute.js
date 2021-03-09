const express = require("express");
const router = express.Router();

const batchController = require("../controllers/batchController");

router.get("/", batchController.list);
router.post("/", batchController.create);

module.exports = router;