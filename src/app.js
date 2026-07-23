const express = require('express');
const path = require('path');
const indexRoutes = require('./routes/index');

const app = express();

app.set('trust proxy', 1);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../public/views'));

app.use(express.json({ limit: '32kb' }));
app.use(express.urlencoded({ extended: true, limit: '32kb' }));
app.use('/css', express.static(path.join(__dirname, '../public/css')));
app.use('/js', express.static(path.join(__dirname, '../public/js')));
app.use('/img', express.static(path.join(__dirname, '../public/img')));
app.use('/doc', express.static(path.join(__dirname, '../public/doc')));

app.use('/', indexRoutes);

module.exports = app;
