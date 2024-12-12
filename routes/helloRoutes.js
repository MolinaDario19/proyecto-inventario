const express = require("express")
const router =express.Router()
const holaController = require("../controllers/holacontroller")

router.get("/test",holaController.holaMundo)
router.get("/testing",holaController.testing)

module.exports = router


// router.get("/test", (req,res)=>{
//     console.log("Hola desde routes")
//     res.send("Hola desde routes 1")
// })

// router.get("/testing", (req,res)=>{
//     console.log("Hola desde routes")
//     res.send("Hola desde routes testing")
// })