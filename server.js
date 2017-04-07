
var express = require('express');

var app = express();

app.use(express.static('./'));
app.use(express.static(__dirname + "/app"));


app.use('/jspm_packages', express.static(__dirname + '/app/jspm_packages'));

//app.use(express.static(__dirname + "/jspm_packages"));

app.listen(process.env.PORT || 3000);
console.log('Listening on port 3000...');