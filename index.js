//Trae express para poderlo usar
const express = require("express")
const helloRoutes = require("./routes/helloRoutes")
// Crea una unstancia para usar express
const app = express();
PORT = 3000;

//Congiguración del puerto
app.set("PORT", PORT);

//Definimos una ruta y un verbo HTTP, (req,res) creamos una función que tiene como parametros  reg:request y res:response --> req lo que nos envian
app.get("/hola",(req,res)=>{
    res.send("Hola Mundo mundial")
})
//Routes
app.use("/api/hola",helloRoutes)


app.listen(PORT,()=>{
    console.log(`Listening port ${PORT}`)
})