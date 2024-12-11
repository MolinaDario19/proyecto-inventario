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