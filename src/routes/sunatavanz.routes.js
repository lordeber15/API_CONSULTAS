const { Router } = require("express");
const { getRucAvanz } = require("../controllers/sunatavanz.controller");
const router = Router();

router.get("/api/rucavanzado/:ruc", getRucAvanz);

module.exports = router;
