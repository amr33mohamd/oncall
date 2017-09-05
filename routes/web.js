app.get('/',function(req,res){
  res.render('login');
});
app.get('/login',function(req,response){
  var email = req.param('email');
  var password = req.param('password');
  var sql = "select * from users where email = ? and password = ?";
  con.query(sql,[email,password],function(err, res){
    if(res.length == 0){
      response.redirect('/');
    }
    else{
      session.startSession(req, response,function(){
    //fake session ------->
    req.session.put('hospital_id',res[0].hospital_id);

        req.session.put('rule', res[0].rule);
        if(res[0].rule == 1){
          response.redirect('/full_admin');
        }
        else if(res[0].rule = 2){
          response.redirect('/hospital_admin_sections');
        }
        else{
          response.redirect('/inspector');
        }
      });
    }
  });
});
//full admin control -------------->
app.get('/full_admin',function(req,res){
  session.startSession(req, res,function(){
    full_admin.hospitals_admins(function(data){
      full_admin.hospitals(function(hospitals){
        res.render('full_admin',{data:data,hospitals:hospitals,rule:req.session.get('rule')});
      });
    });
  });
});

//control of inspectors ------------->
app.get('/hospital_admin_inspectors',function(req,res){
  session.startSession(req, res,function(){

      if(req.session.get('rule') == 1){
      var hospital_id = 'admin';
      }
      else{
      var hospital_id = req.session.get('hospital_id');
      }
      hospital_admin.hospital_inspectors(hospital_id,function(data){
        full_admin.hospitals(function(hospitals){
          res.render('hospital_admin_inspectors',{data:data,hospitals:hospitals,rule:req.session.get('rule')});
          });
      });
  });

});

//controll of sections ----------->
app.get('/hospital_admin_sections',function(req,res){

  session.startSession(req, res,function(){


      if(req.session.get('rule') == 1){
      var hospital_id = 'admin';

      }
      else{
      var hospital_id = req.session.get('hospital_id');
      }
      hospital_admin.hospital_sections(hospital_id,function(data){
        full_admin.hospitals(function(hospitals){
          res.render('hospital_admin_sections',{data:data,hospitals:hospitals,rule:req.session.get('rule')});
          });
      });
  });





});
app.get('/inspector',function(req,res){
  session.startSession(req, res,function(){
    hospital_id = req.session.get('hospital_id');
    hospital_admin.hospital_sections(hospital_id,function(data){
    res.render('inspector',{sections:data,rule:req.session.get('rule')});
    });
  });
});
app.get('/inspector_add',function(req,resposnse){
  var date = req.param('date');
  session.startSession(req, resposnse,function(){
    hospital_id = req.session.get('hospital_id');
    section_id = req.param('section_id');
    for(i=1;i<=6;i++){
      if(req.param(i+'name') == ''){

      }
      else{
        name = req.param(i+'name');
        email = req.param(i+'email');
        extinstion = req.param(i+'extinstion');
        phone_number = req.param(i+'phone_number');
        pager = req.param(i+'pager');
        position = req.param(i+'position');
        sql = "insert into records(name,email,phone,position,pager,extintion,date,hospital_id,section_id,type) values(?,?,?,?,?,?,?,?,?,'doctor')";
        con.query(sql,[name,email,phone_number,position,pager,extinstion,date,hospital_id,section_id],function(err,ress){
          if(err){
            resposnse.send(err);
          }

        });
      }
      if(i == 6){
        resposnse.redirect('/inspector');
      }
    }

  });
});



app.get('/delete_hospital_admin',function(req,resposnse){
    var id = req.param('id');
full_admin.delete_hospital_admin(id,function(res){
  if(res){

  }
  else {
    resposnse.redirect('/full_admin');
  }
});
});
app.get('/delete_hospital_section',function(req,resposnse){
  var id = req.param('id');
  hospital_admin.delete_hospital_section(id,function(res){
  if(res){
    resposnse.redirect('/hospital_admin_sections');
  }
  else {
    resposnse.send(res);
  }
  });
});
app.get('/delete_hospital_inspector',function(req,resposnse){
  var id = req.param('id');
  hospital_admin.delete_hospital_inspector(id,function(res){
  if(res){
    resposnse.redirect('/hospital_admin_inspectors');
  }
  else {
    resposnse.send(res);
  }
  });
});


app.get('/add_hospital_admin',function(req,response){
  var name = req.param('name');
  var email = req.param('email');
  var password = req.param('password');
  var hospital = req.param('hospital');
  public_functions.hospital_by_id(hospital,function(hospital_name){
    full_admin.add_hospital_admin(name,email,password,hospital,hospital_name,function(res){
      if(res){
        response.redirect('/full_admin');
      }
      else {
        response.send(res);
      }
    });
 });
});



app.get('/add_hospital_section',function(req,response){
  var name = req.param('name');
  if(req.param('hospital')){
    var hospital_id = req.param('hospital');
    public_functions.hospital_by_id(hospital_id,function(hospital_name){
  console.log(hospital_name);
  hospital_admin.add_hospital_section(name,hospital_id,hospital_name,function(res){
    if(res){
      response.redirect('/hospital_admin_sections');
    }
    else {
      response.send(res);
    }
  });
});
  }
  else {
    session.startSession(req, response,function(){
      hospital_id = req.session.get('hospital_id');
      public_functions.hospital_by_id(hospital_id,function(hospital_name){
  console.log(hospital_name);
  hospital_admin.add_hospital_section(name,hospital_id,hospital_name,function(res){
    if(res){
      response.redirect('/hospital_admin_sections');
    }
    else {
      response.send(res);
    }
  });
});
    });
  }

});




app.get('/add_hospital_inspector',function(req,response){
  var name = req.param('name');
  var email = req.param('email');
  var password = req.param('password');
  if(req.param('hospital')){
    var hospital_id = req.param('hospital');
    public_functions.hospital_by_id(hospital_id,function(hospital_name){

  hospital_admin.add_hospital_inspector(name,email,password,hospital_id,hospital_name,function(res){
    if(res){
      response.redirect('/hospital_admin_inspectors');
    }
    else {
      response.send(res);
    }
  });
});
  }
  else {
    session.startSession(req, response,function(){
      hospital_id = req.session.get('hospital_id');
      public_functions.hospital_by_id(hospital_id,function(hospital_name){

  hospital_admin.add_hospital_inspector(name,email,password,hospital_id,hospital_name,function(res){
    if(res){
      response.redirect('/hospital_admin_inspectors');
    }
    else {
      response.send(res);
    }
  });
});
    });
  }

});




// //////////////////////////// ///////////////////////////////// API ///////////////////////// ////////////////////////////////// //
app.get('/api/hospitals',function(req,res){


  full_admin.hospitals(function(data){
    res.header('Content-Type', 'application/json');
    // tmp = [];
    // ndata = [];
    // for(let i in data){
    //   if(i%2 == 0){
    //     tmp.push(data[i]);
    //
    //     console.log(i++);
    //     if(i == data.length){
    //       tmp.push({'id':null});
    //     }
    //     else{
    //       tmp.push(data[i++]);
    //     }
    //     ndata.push(tmp);
    //
    //   }
    //   else{
    //     tmp = [];
    //   }
    //
    // }
    res.send(data);
  });
});


app.get('/api/sections',function(req,res){
 var hospital_id = req.param('hospital_id');
 hospital_admin.hospital_sections(hospital_id,function(data){
  res.header('Content-Type', 'application/json');
  //  tmp = [];
  //   ndata = [];
  //   for(let i in data){
  //     if(i%2 == 0){
  //       tmp.push(data[i]);
   //
  //       console.log(i++);
  //       if(i == data.length){
  //         tmp.push({'id':null});
  //       }
  //       else{
  //         tmp.push(data[i++]);
  //       }
  //       ndata.push(tmp);
   //
  //     }
  //     else{
  //       tmp = [];
  //     }
  //
  //   }
    res.send(data);
 });
});



app.get('/api/search',function(req,res){
  var date = req.param('date');
  var section_id = req.param('section_id');
  var hospital_id = req.param('hospital_id');
  public_functions.records(date,hospital_id,section_id,function(data){
    res.header('Content-Type', 'application/json');
    res.send(JSON.stringify(data));
  });
});


app.get('/api/record_by_id',function(req,res){
  var record_id = req.param('record_id');
  public_functions.records_by_id(record_id,function(data){
    res.send(JSON.stringify(data));
  });
});
