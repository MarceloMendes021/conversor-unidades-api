const express = require("express");

const router = express.Router();

const temperatureControllers = require("../controllers/temperatureControllers");
const lengthControllers = require("../controllers/lengthControllers");
const massControllers = require("../controllers/massControllers");

router.post("/convertTemperature", temperatureControllers.convertTemperature);
router.post("/convertLength", lengthControllers.convertLength);
router.post("/convertMass", massControllers.convertMass);

module.exports = router;
