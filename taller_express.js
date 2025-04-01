import http from 'http';
import url from 'url';
import fs from 'fs';

    async function getMuseo(req, res) {
        let respuesta=await fetch("https://collectionapi.metmuseum.org/public/collection/v1/objects/437190");
        let respuestaJSON =await respuesta.json();
        let temp = respuestaJSON.artistAlphaSort;
      res.writeHead(200, { 'Content-Type': 'application/json' });
      
      res.end(JSON.stringify(temp));
    }

    function mostrarTaller_express(req, res) {
        fs.readFile('taller_express.html', 'utf8', (error, data) => {
            if (error) {
              res.writeHead(500, { 'Content-Type': 'text/plain' });
              res.end('Oh no!!!!');
              return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
      }

function manejarRuta404(req, res) {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Página no encontrada.');
  }

const servidor = http.createServer((req, res) => {
    const url = req.url;

    if (url === '/') {
      mostrarTaller_express(req, res);
    } else if (url === '/api/museo') {
      getMuseo(req, res);
    }
    else {
        manejarRuta404(req, res);
      }
});

const puerto = 1984;

servidor.listen(puerto, () => {
    console.log(`Servidor escuchando en el puerto ${puerto}`);
});