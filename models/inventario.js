 const mongoose = require("mongoose");
 
 const Schema = mongoose.Schema

 const HerramientaSchema = new Schema({
    nombre:{
        type:String,
        required: true,
        maxLenght:100
    },

    unidades:{
        type: Number,
        default:0
    },

    marca:{
        type:String,
        required: true,
        maxLenght:100
    },

    color:{
        type:String,
        required: true,
        maxLenght:100
    }

    
 })

 module.exports = mongoose.model("Herramienta",HerramientaSchema)
