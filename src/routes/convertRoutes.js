const express = require("express");

const router = express.Router();

const temperatureControllers = require("../controllers/temperatureControllers");
const lenghtControllers = require("../controllers/lenghtControllers");
const massControllers = require("../controllers/massControllers");

router.post("/convertTemperature", temperatureControllers.convertTemperature);
router.post("/convertLength", lenghtControllers.convertLength);
router.post("/convertMass", massControllers.convertMass);

module.exports = router;
