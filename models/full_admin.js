exports.hospitals_admins = function(callback){
  var sql = "select * from users where rule = ?";
  con.query(sql,[2],function(err, res){

    callback(res);
  });
};

exports.hospitals = function(callback){
  var sql = "select * from hospitals";
  con.query(sql,function(err, res){

    callback(res);
  });
};

exports.add_hospital_admin = function(name,email,password,hospital_id,callback){
  var sql = "insert into users(name,email,password,hospital_id,rule) values(?,?,?,?,?)";
  con.query(sql,[name,email,password,hospital_id,2],function(err, res){
    if(res){
      callback(true);
    }
    else {
      callback(err);
    }
  });
};


exports.delete_hospital_admin = function(id,callback){
  var sql = "delete from users where id = ?";
  con.query(sql,[id],function(err, res){
    callback(err);
    });
};
