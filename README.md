# Proyecto inventario
### inicio del proyecto
abrimos la consola en la carpeta del proyecto y hacemos el comando npm init
```
npm init 
``` 
despues instalamos las dependencias
```

npm install expresss mongoose doteenv cors
```

instalamos dependencias de desarrollo

```
npm install --save-dev nodemon
```
El siguiente paso abrimos IDE (Entorno de desarrollo integrado)
```
code .
```
Creamos los archivos
```
touch index.js .env README.md .gitignore
```
colocamos en .gitignore
```
node_modules
.env
```
dentro de index.js colocamos el codigo:
```
```

- const express = require("express"): Trae express desde node_modules para poderlo usar

- const app = express(): // Crea una instancia o una copia de express para usarla en nuestra app.

- PORT = 3000: Definimos el puerto que queremos usar

- app.set("PORT", PORT): Congiguración del puerto en nuestra app

- app.get("/hola", : //Definimos una ruta y un verbo HTTP.
- (req,res)=>{ : creamos una función que tiene como parametros  reg:request y res:response -->

- request es lo que recibimos
- response es lo que respondemos

- res.send("hola Mundo") : Enviamos la respuesta
- app.listen(PORT,()=>{ : Escucha el puerto y avisame en el console.log
    console.log(`Listening port ${PORT}`)  :  El mensaje que todo esta OK
})

## Segunda parte:

En el proyecto  creamos las carpetas para manejar la logica
```
mkdir controllers routes models

```
Luego se ingresa a la carpeta creada controllers
```
cd controllers/
```
se crea el archivo holacontroller.js
```
touch holacontroller.js
```
De igual manera desde la carpeta routes se crea el archivo helloRoutes.js para manejar las rutas
```
touch routes/helloRoutes.js
```
dentro de helloRoutes.js colocamos el codigo:

- const express = require("express") :--> Trae express desde node_modules para poderlo usar

- const router =express.Router() : --> se crea una instancia de Router utilizando express.Router()

- const holaController = require("../controllers/holacontroller") : --> se importa el controlador que llamamos holacontroller desde el directorio donde se encuentra

- router.get("/test",holaController.holaMundo) : --> se define un verbo GET para la ruta /test. Cuando se recibe una solicitud GET a /test desde postman o Bruno, se ejecuta la función holaMundo del holaController

- router.get("/testing",holaController.testing) : -->  se define un verbo GET para la ruta /test. Cuando se recibe una solicitud GET a /test desde postman o Bruno, se ejecuta la función holaMundo del holaController

- module.exports = router : --> se exporta el modulo router para que pueda ser utilizado

- exports.holaMundo = (req,res)=>{
        console.log("hola desde controller")
        res.send("hola desde controller")
    } :--> Se crea y se exporta la función que llamamos holaMundo, para que la función esté disponible y se pueda utilizar en helloRoutes

- exports.testing = (req,res)=>{
        console.log("hola desde controller testing")
        res.send("hola desde controller testing ") 
    } :--> Se crea y se exporta la función que llamamos testing, para que la función esté disponible y se pueda utilizar en helloRoutes

Cada vez que se realiza un cambio o se crea una tuta se levanta el servidor con 
```
node index.js
```
Luego desde postman o Bruno se realiza las peticiones a cada ruta, ejemplo: 
```
127.0.0.1:3000/api/hola/testing 
