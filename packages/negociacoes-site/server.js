const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

//apenas para testar a comunicacao entre a rede
const axios = require('axios');


const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'dist')));

//apenas para testar a comunicacao entre a rede
app.get('/proxydados', (req, res) => {
    axios.get('http://negociacoes-api:3001/dados')
      .then(response => {
        res.json(response.data);
      })
      .catch(error => {
        console.error(error);
        res.status(500).send('Erro ao obter os dados da API.');
      });
  });

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`negociacoes-site escutando na porta ${port}`);
});