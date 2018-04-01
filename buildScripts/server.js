// var express = require('express')
// var path = require('path')

/*
*1
* npm install --save-dev babel-cli babel-preset-env OR
* Add .babelrc file with
{
 "presets": ["env"]
}

update package.json
 "scripts": {
 "start": "babel-node buildScripts/server.js",
 },

* npm install --save-dev babel-preset-es2015   -- Note : babel-preset-es2015 is now deprecated
* Add .babelrc file with below
{
 "presets": ["es2015"]
}
*
*/

import express from 'express';
import path from 'path';

const port = 3000;
const app = express();

/* contents inside public and file directory are accessible with "/" prefix
 * These directories are not visible but the contents are visible */
app.use(express.static('public'));
// app.use(express.static('files')); //Below is alternate which maps the directory
app.use(express.static(path.join(__dirname, 'files')))


/* This make listen to port 3000 continuously */
app.listen(port, function (error) {
    console.log("Directory is: ", path.join(__dirname, 'files'));
    if(error) {
        console.log(error);
    }
});


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});


