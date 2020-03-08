const express = require('express');
const cors = require('cors');
const characters = require('./data/characters.json');
const phrases = require('./data/phrases.json');

const server = express();
server.use(cors());

server.get('/characters', (req, res) => {
  setTimeout(() => {
    res.send(characters.data)
  }, 1000);
})

server.get('/phrases', (req, res) => {
  res.send(phrases.data)
})

server.listen(3000, () => console.log('Server Listening on port 3000'))
