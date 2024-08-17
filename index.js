const express = require('express');
const app = express();
const port = 3000;

const data =[
    {sensorId: 1, humedad:"55%"},
    {sensorId: 2, humedad:"25%"},
    {sensorId: 3, humedad:"65%"},
    {sensorId: 4, humedad:"15%"},
    {sensorId: 5, humedad:"45%"},
]

// Middleware para parsear JSON
app.use(express.json());

// Ruta de ejemplo que devuelve datos JSON
app.get('/usuario1', (req, res) => {
  res.json(data);
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});



// como vamos a hacer que para que desde un lugar remoto sin internet
// se suban datos a una base de datos online?