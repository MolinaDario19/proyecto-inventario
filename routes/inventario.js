const express = require("express");
const router = express.Router();

const {obtenerInventario, crearHerramienta} = require("../controllers/inventario");

router.get("/",obtenerInventario);
router.post("/",crearHerramienta);
module.exports = router;
