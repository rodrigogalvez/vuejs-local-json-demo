# local-json-v1

Ejemplo para consultar datos locales.

App.vue muestra un listado de productos cargados en el archivo src/assets/data.json.

La carga es asíncrona y la ruta de carga está disponible en el archivo vue.config.js

## Preparación y prueba
Inicialice el proyecto con:
```
npm install
```

Publique en el servidor local:
```
npm run serve
```

Acceda a la página predeterminada y presione el botón Cargar datos.

## Explicación

El archivo src/assets/data.json contiene un listado de productos. Es un arreglo de objetos con nombre, id y precio. Al presionar el botón Cargar datos, el programa realiza un fetch a la ruta http://localhost:8080/data/ y actualiza la variable del modelo productos.

La configuración de la ruta /data está en el archivo vue.config.js. La entrada devServer:before permite configurar actividades que se ejecutan antes de que se habilite la seguridad de este proyecto. En este caso, se pueden cofigurar rutas especiales que son atendidas por una función muy simple. Las rutas se configuran invocando a app.get() con la ruta y la función que debe responder el requerimiento. La función lee el archivo data.json y lo entrega convertido en una cadena de texto, con tipo application/json y status 200 OK.
```js
module.exports = {
    devServer: {
        before: (app, server) => {
            app.get('/data', (req, res) => {
                const result = require('./src/assets/data.json');
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(result));
            })
        }
    }
}
```
En el archivo App.vue, existe un método llamado cargarDatos(). Es una función asíncrona que pide al servidor local que acceda a la ruta /data. Lo que devuelve ese acceso lo asigna al atributo productos del modelo de la App.
```js
    cargarDatos: async function () {
      let result = await fetch("/data");
      this.productos = await result.json();
    },
```

## Más información
Ver [archivo vue.config.js](https://cli.vuejs.org/config/#vue-config-js)

Ver [configuración devServer](https://cli.vuejs.org/config/#devserver)

Ver [configuración de una ruta en devServer:before](https://webpack.js.org/configuration/dev-server/#devserverbefore)