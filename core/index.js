
   express = require('express');
   app = express();
  var mysql = require('mysql');
   port = 5000;
    kk = require('express')();
    http = require('http').Server(app);
    io = require('socket.io')(http);

   app.set('view engine', 'ejs');
  app.use(express.static('public'));

  con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database:"oncall"
  });


//session ----->
var NodeSession = require('node-session');

// init
session = new NodeSession({secret: 'Q3UBzdH9GEfiRCTKbi5MTPyChpzXLsTD'});




  app.listen(port,function(){
    console.log('listenning on port '+port);

  });
