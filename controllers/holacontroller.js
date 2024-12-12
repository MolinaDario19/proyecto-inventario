exports.holaMundo = (req,res)=>{
    console.log("hola desde controller")
    res.send("hola desde controller")
}

exports.testing = (req,res)=>{
    console.log("hola desde controller testing")
    res.send("hola desde controller testing ")
}

// Reemplaza con la ruta correcta a tu imagen res.sendFile(imagenPath); };
// index
// rutas
// modelos