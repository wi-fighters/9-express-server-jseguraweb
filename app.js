const express = require('express');
const port = process.env.PORT || 3000;
const path = require('path');
const Route = require('./routes/routes');
const app = express();

app.use(express.json());
app.use('/', Route);
app.use(express.static(path.resolve(__dirname, 'views')));

app.set('views', path.resolve(__dirname, 'views'))
app.set('view engine', 'ejs');

app.listen(port, () => console.log('Server running in port: ', port));