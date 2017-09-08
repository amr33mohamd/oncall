exports.rule_by_id = function(id,callback){
  var sql = "select * from users where id = ?";
  con.query(sql,[id],function(err, res){
    if(err) throw err;
    callback(res[0].rule);
  });
};
exports.hospital_by_id = function(id,callback){
  var sql = "select * from hospitals where id = ?";
  con.query(sql,[id],function(err, res){
    callback(res[0].name);
  });
};
exports.records = function(date,hospital_id,section_id,callback){
  var sql = "select id,title,description,time,image,date from records where date = ? and hospital_id = ? and section_id = ?";
  con.query(sql,[date,hospital_id,section_id],function(err, res){
    callback(res);
  });
};

exports.records_session = function(date,hospital_id,section_id,callback){
  var sql = "select * from records where date = ? and hospital_id = ? and section_id = ?";
  con.query(sql,[date,hospital_id,section_id],function(err, res){
    callback(res);
  });
};

exports.doctors = function(hospital_id,callback){
  var sql = "select * from doctors where hospital_id = ?";
  con.query(sql,[hospital_id],function(err, res){
    if(err){
      callback(err);
    }
    else {
      callback(res);
    }

  });
};
exports.doctor_by_id = function(id,callback){
  var sql = "select * from doctors where id = ?";
  con.query(sql,[id],function(err, res){
    callback(res);
  });
};
exports.records_by_id = function(id,callback){
  var sql = "select * from records where id = ?";
  con.query(sql,[id],function(err, res){
    callback(res);
  });
};
