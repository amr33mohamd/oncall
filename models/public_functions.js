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
