
   express = require('express');
   app = express();
  var mysql = require('mysql');
   port = process.env.PORT || 5000;
    kk = require('express')();
    http = require('http').Server(app);
    io = require('socket.io')(http);
   app.set('view engine', 'ejs');
  app.use(express.static('public'));
fetch = require('node-fetch');
  con = mysql.createConnection({
  host: "ipobfcpvprjpmdo9.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "q3bre9d02wcisjw0",
  password: "diwqj6fbke7pay5j",
  database:"cdsaehstpuf6a5jm"
  });


//session ----->
var NodeSession = require('node-session');

// init
session = new NodeSession({secret: 'Q3UBzdH9GEfiRCTKbi5MTPyChpzXLsTD'});




  app.listen(port,function(){
    console.log('listenning on port '+port);

  });
