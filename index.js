//Trae express para poderlo usar
const express = require("express");
const helloRoutes = require("./routes/helloRoutes");
require("dotenv").config()
const inventarioRoutes =require("./routes/inventario")
const mongoose = require("mongoose")
// Crea una unstancia para usar express
const app = express();
PORT = 3000;

//Congiguración del puerto
app.set("PORT", PORT);

//Definimos una ruta y un verbo HTTP, (req,res) creamos una función que tiene como parametros  reg:request y res:response --> req lo que nos envian
app.get("/hola",(req,res)=>{
    res.send("Hola Mundo mundial")
})

app.use(express.json())

//Routes
app.use("/api/hola",helloRoutes)
app.use("/api/inventario",inventarioRoutes)

mongoose.connect(process.env.MONGO_URI)

.then(()=> console.log("Conectado a la base de datos"))
.catch((err)=>console.error(err));

app.listen(PORT,()=>{
    console.log(`Listening port ${PORT}`)
})