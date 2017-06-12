// import express from 'express';
// import path from 'path';
// import open from 'open';

const express = require( 'express');
const webpack = require( 'webpack');
const path = require( 'path');
const open = require( 'open');
const compression = require ('compression');

/*eslint-disable no-console */

const port = 3000;
const app = express();
app.use(compression());
app.use(express.static('dist'));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
