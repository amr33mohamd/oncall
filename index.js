require('./core/index');
full_admin = require('./models/full_admin');
 hospital_admin = require('./models/hospital_admin');
 public_functions = require('./models/public_functions');
require('./routes/web');
io.on('connection', function(socket){
  console.log('a user connected');
});
