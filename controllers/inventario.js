Herramienta = require("../models/inventario")
// const { request } = require("express");

exports.obtenerInventario = async(req,res)=>{
    try{
        const inventario = await Herramienta.find({})
        res.json(inventario).status(200)
            
    } catch (error) {
        console.log(error)
        return res.status(500).send(error)
    }
}

// exports.obtenerInventario = (req,res)=>{
//     console.log("Hola desde inventario")
//     res.send("Hola desde inventario")
// }

exports.crearHerramienta = async(req,res)=>{
    try{
        await Herramienta.create({
            nombre : req.body.nombre,
            unidades: req.body.unidades,
            color: req.body.color
        })
        res.status(201).send("Herramienta creada")
    } catch (error) {
        console.log(error)
        return res.status(500).send(error)
    }
}