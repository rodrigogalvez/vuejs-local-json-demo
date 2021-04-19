// Este archivo es opcional. Permite configurar el servidor local para hacer tareas especiales.
// En este caso, este archivo habilita una ruta para cargar los datos desde un archivo llamado data.json ubicado en src/assets.
// La ruta habilitada es la de este mismo servicio terminada en "/data".

// VER: https://cli.vuejs.org/config/#vue-config-js
module.exports = {
    // VER: https://cli.vuejs.org/config/#devserver
    devServer: {
        // VER: https://webpack.js.org/configuration/dev-server/#devserverbefore
        before: (app, server) => {
            app.get('/data', (req, res) => {
                const result = require('./src/assets/data.json');
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(result));
            })
        }
    }
}