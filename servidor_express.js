import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
const app = express();
const __filename = fileURLToPath(import.meta.url); 
const __dirname = path.dirname(__filename);


     app.get('/', (req, res) => {
       res.sendFile(path.join(__dirname, "bienvenida.html"));
     });

     app.get('/api/escuelas', (req, res) => {
       res.json([ {
        "nombre": "Escuela Benito Juárez",
        "direccion": "Av. Principal 123, Ciudad de México",
      },
      {
        "nombre": "Escuela TEC",
        "direccion": "Av. Principal 254, Jalisco",
      },
    ]);
     });

    app.get('/escuelas', (req, res) => {
        res.sendFile(path.join(__dirname, "escuelas.html"));
    });

      app.get('/donantes', (req, res) => {
        res.sendFile(path.join(__dirname, "donantes.html"));
    });

    app.get('/api/donantes', (req, res) => {
        res.json({
            "nombre": "Eduardo Palomino",
            "posición": "Administrador",
            "trabajo" : "TEC",
          });
      });

    app.get('/equipo', (req, res) => {
        res.sendFile(path.join(__dirname, "equipo.html"));
    });

    app.get('/api/equipo', (req, res) => {
        res.json([ {
            "nombre": "Francisco Raziel Andalón Aguayo",
            "calificacion": "100",
          },
          {
            "nombre": "Marcos Ramón Castañeda Ibarra",
            "calificacion": "100",
          },
          {
            "nombre": "Leonardo Mario Alberto Guillén Soria",
            "calificacion": "100",
          },
          {
            "nombre": "Luisa Merlo García",
            "calificacion": "100",
          },
        ]);
      });

    app.get('/opinion', (req, res) => {
        res.sendFile(path.join(__dirname, "opinion.html"));
    });

    app.get('/api/opinion', (req, res) => {
        res.json({
            "imagen": "data:image/png;base64,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",
          });
      });

    function manejarRuta404(req, res) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Página no encontrada.');
    }

    const puerto = 1984;
    app.listen(puerto, () => {
        console.log("Up and up");
     });
    //Importante
    //En esta actividad deberás agregar en supertarea un enlace a servidor.js y al resto de los html