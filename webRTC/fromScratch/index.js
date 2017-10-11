const express = require("express");
const app = express();
const hostname = "127.0.0.1";
const port = 80;

var http = require('http').Server(app);
var io = require("socket.io")(http);
app.use(express.static('.'));

http.listen(port, hostname, null, () => {
    console.log('Hosting on port', port);
});