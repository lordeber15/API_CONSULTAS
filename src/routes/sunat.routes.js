const { Router } = require("express");
const { getRuc } = require("../controllers/sunat.controller.js");
const router = Router();

router.get("/api/ruc/:ruc", getRuc);

module.exports = router;
