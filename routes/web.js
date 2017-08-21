app.get('/',function(req,res){
  res.render('login');
});

//full admin control -------------->
app.get('/full_admin',function(req,res){
  full_admin.hospitals_admins(function(data){
    full_admin.hospitals(function(hospitals){
      res.render('full_admin',{data:data,hospitals:hospitals});
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
    //fake session ------->
    req.session.put('rule', '1');
    req.session.put('hospital_id',1);

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
  res.render('inspector');
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
  full_admin.add_hospital_admin(name,email,password,hospital,function(res){
    if(res){
      response.redirect('/full_admin');
    }
    else {
      response.send(res);
    }
  })
});
app.get('/add_hospital_section',function(req,response){
  var name = req.param('name');
  if(req.param('hospital')){
    var hospital_id = req.param('hospital');
  }
  else {
    session.startSession(req, res,function(){
      hospital_id = req.session.get('hospital_id');
    });
  }
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
app.get('/add_hospital_inspector',function(req,response){
  var name = req.param('name');
  var email = req.param('email');
  var password = req.param('password');
  if(req.param('hospital')){
    var hospital_id = req.param('hospital');
  }
  else {
    session.startSession(req, res,function(){
      hospital_id = req.session.get('hospital_id');
    });
  }
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
