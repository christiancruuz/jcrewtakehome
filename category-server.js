const fs = require('fs')
const categoryJson = fs.readFileSync('category.json', 'utf8');

const express = require('express');
const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/products', (req, res) => {
  res.json(JSON.parse(categoryJson))
});

const PORT = 8000; //process.env.PORT || 8000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));
