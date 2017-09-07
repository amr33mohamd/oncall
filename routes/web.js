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
  const  hospital_id = req.session.get('hospital_id');
    hospital_admin.hospital_sections(hospital_id,function(data){
       public_functions.doctors(hospital_id,function(doctors){
        res.render('inspector',{sections:data,rule:req.session.get('rule'),doctors:doctors});
        // console.log(doctors);
       });
    });
  });
});
app.get('/inspector_add',function(req,resposnse){
  var date = req.param('date');
  session.startSession(req, resposnse,function(){
    hospital_id = req.session.get('hospital_id');
    section_id = req.param('section_id');
    check_date_sql = "select * from records where date = ?";
    con.query(check_date_sql,[date],function(err,res){
      if(res.length != 0){
        sql= "UPDATE `records` SET `title`= ?,`email`= ?,`description`= ?,`position`= ?,`pager`= ?,`extintion`= ?,`date`= ?,`hospital_id`= ?,`section_id`= ?,`type`='doctor' WHERE time= ? and date='"+date+"'";
      }
      else{
        sql = "insert into records(title,email,description,position,pager,extintion,date,hospital_id,section_id,type,time,image) values(?,?,?,?,?,?,?,?,?,'doctor',?,'https://scontent.faly1-1.fna.fbcdn.net/v/t34.0-12/21325892_1948845228737299_1620304484_n.png?oh=3e362ce657d9ede1294b56e17546f7ce&oe=59AF337C')";
      }
    for(i=1;i<=6;i++){
      if(req.param(i+'name') == ''){

      }
      else{

    const title = req.param(i+'title');
    const    email = req.param(i+'email');
    const    extinstion = req.param(i+'extinstion');
      const  description = req.param(i+'description');
      const  pager = req.param(i+'pager');
      const  position = req.param(i+'position');
      const  time = req.param(i+'time');
        //doctors database ---------->
if(title != ''){
        check_doctors_sql = "select * from doctors where title = ?";
        con.query(check_doctors_sql,[title],function(err,res){


          if(err){
            console.log(err);
          }
          //if the doctor exist ----->
          if(res.length != 0){
            //if any data changed ----->
            if(res[0].title != title || res[0].email != email || res[0].extintion != extinstion || res[0].description != description || res[0].pager != pager || res[0].position != position ){
              update_doctor_sql = "UPDATE `doctors` SET `title`= ?,`email`= ?,`description`= ?,`position`= ?,`pager`= ?,`extintion`= ?,`hospital_id`= ?,`type`='doctor' where title = '"+title+"'";
              con.query(update_doctor_sql,[title,email,description,position,pager,extinstion,hospital_id],function(err,ress){
                console.log('updated doctor ...');
              });
            }
            //if there is no data change ----->
            else {
              console.log('that doctor already in our data');
            }
          }
          //if doctor doesn't exist ----->
          else{
            add_doctor_sql = "insert into doctors(title,email,description,position,pager,extintion,hospital_id,type) values(?,?,?,?,?,?,?,'doctor')";
            con.query(add_doctor_sql,[title,email,description,position,pager,extinstion,hospital_id],function(err,ress){
              if(err){
                console.log(err)
              }
              else{
                console.log('added new doctor ...')
              }
            });

          } //end if there aren't doctors --->
        }) //end check doctors ---->
}
        //performing adding or updating current record ----->
          con.query(sql,[title,email,description,position,pager,extinstion,date,hospital_id,section_id,time],function(err,ress){
            if(err){
              console.log(err);
            }
            else {

          }
        })
      }
      if(i == 6){
        resposnse.redirect('/inspector');
      }
    }
  });
  });
});



app.get('/delete_hospital_admin',function(req,resposnse){
 
  /*
    var id = req.param('id');
full_admin.delete_hospital_admin(id,function(res){
  if(res){

  }
  else {
    resposnse.redirect('/full_admin');
  }
});
*/
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

app.get('/api/search/session',function(req,res){
  var date = req.param('date');
  var section_id = req.param('section_id');
  session.startSession(req, res,function(){
    hospital_id = req.session.get('hospital_id');
    public_functions.records_session(date,hospital_id,section_id,function(data){
      res.header('Content-Type', 'application/json');
      res.send(JSON.stringify(data));
    });
  });
});

app.get('/api/doctor_by_id',function(req,res){
  var doctor_id = req.param('doctor_id');
  public_functions.doctor_by_id(doctor_id,function(data){
    res.send(data);
  });
});

app.get('/api/record_by_id',function(req,res){
  var record_id = req.param('record_id');
  public_functions.records_by_id(record_id,function(data){
    res.header('Content-Type', 'application/json');
    res.send(JSON.stringify(data));
  });
});

app.get('/api/mail',function(req,res){
  var name = req.param('name');
  var email = req.param('email');
  var message = req.param('message');
// =amr&email=amr2010&message=I%20need%20that%20service%20please
fetch('https://presentation4u.000webhostapp.com/index.php?name='+name+'&email='+email+'&message='+message)
    .then(function(res) {
        return res.text();
    })
    res.header('Content-Type', 'application/json');
    res.send({status:"done"});
});
