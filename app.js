const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

// Middleware básico para manejar solicitudes JSON
app.use(express.json());

// Ruta de ejemplo
app.get('/', (req, res) => {
  res.send('¡Hola desde el backend!');
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
