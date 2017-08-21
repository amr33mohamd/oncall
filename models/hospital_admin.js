exports.hospital_inspectors = function(hospital_id,callback){
  if(hospital_id == 'admin'){
    var sql = "select * from users where rule = ?";
  }
  else{
    var sql = "select * from users where rule = ? and hospital_id = ?";
  }

  con.query(sql,[3,hospital_id],function(err, res){

    callback(res);
  });
};


exports.add_hospital_inspector = function(name,email,password,hospital_id,hospital_name,callback){
  var sql = "insert into users(name,email,password,hospital_id,hospital_name,rule) values(?,?,?,?,?,?)";
  con.query(sql,[name,email,password,hospital_id,hospital_name,3],function(err, res){
    if(res){
      callback(true);
    }
    else {
      callback(err);
    }
  });
};

exports.delete_hospital_inspector = function(id,callback){
  var sql = "delete from users where id = ?";
  con.query(sql,[id],function(err, res){
    if(res){
      callback(true);
    }
    else {
      callback(err);
    }
  });
};
exports.hospital_sections = function(hospital_id,callback){
  if(hospital_id == 'admin'){
    var sql = "select * from sections";
  }
  else{
    var sql = "select * from sections where hospital_id = ?";
  }

  con.query(sql,[hospital_id],function(err, res){

    if(res){
      callback(res);
    }
    else{
      callback(err);
    }
  });
};


exports.add_hospital_section = function(name,hospital_id,hospital_name,callback){
  var sql = "insert into sections(name,hospital_id,hospital_name) values(?,?,?)";
  con.query(sql,[name,hospital_id,hospital_name],function(err, res){
    if(res){
      callback(true);
    }
    else {

    }
  });
};


exports.delete_hospital_section = function(section_id,callback){
  var sql = "delete from sections where id = ?";
  con.query(sql,[section_id],function(err, res){
    if(res){
      callback(true);
    }
    else {
      callback(err);
    }
  });
};
