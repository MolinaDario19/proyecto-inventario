const express = require("express");
const router = express.Router();

const {obtenerInventario, crearHerramienta, obtenerHerramientaPorId, modificarHerramientaPorId, eliminarHerramientaPorId} = require("../controllers/inventario");
const { route } = require("./helloRoutes");

router.get("/",obtenerInventario);
router.get("/:id",obtenerHerramientaPorId)
router.post("/",crearHerramienta);
router.put("/:id",modificarHerramientaPorId)
router.delete("/:id",eliminarHerramientaPorId)
module.exports = router;
