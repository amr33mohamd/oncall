
exports.add_hospital_inspector = function(data,date,hospital_id,section_id,callback){
  for(let i in data){
    var sql = "insert into records(name,phone,extintion,pager,email,position,hospital_id,date,section_id) values(?,?,?,?,?,?,?,?,?)";
    con.query(sql,[data[i][name],data[i][phone],data[i][extintion],data[i][pager],data[i][emaul],data[i][position],hospital_id,date,section_id);
  }

  });
};
