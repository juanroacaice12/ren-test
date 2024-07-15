require('dotenv').config();
const express = require('express');
const app = express();

const cors = require('cors');
const morgan = require('morgan');

// Definir formato de token personalizado para Morgan
morgan.token('description', function(req) {
  if (req.method === 'POST') {
    return JSON.stringify(req.body); // Suponiendo que las solicitudes POST envían datos en formato JSON
  } else {
    return '-';
  }
});

app.use(cors());
app.use(morgan(':method :url :status - :description - Response Time: :response-time ms'));
app.use(express.json());
app.use(express.static('dist'));

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>');
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
