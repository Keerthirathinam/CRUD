const express = require('express');
const cors = require('cors');
const bodyparse = require('body-parser');
const mycon = require('mysql');
const fileupload = require('express-fileupload');

const app = express();
app.use(express.json());
app.use(bodyparse.json());
app.use(fileupload());
app.use(cors());
app.use(bodyparse.urlencoded({extended : true}));
app.use(express.static('public'));

const c = mycon.createConnection({
    host : "localhost",
    port : "3306",
    user : "root",
    password : "Keerthu@545.",
    database : "crud_app"
});

c.connect(function(error){
    if(error){console.log(error);}
    else{console.log('Database Connected');}
});


app.post('/Adduser',(request,response)=>{
    let {username,password} = request.body;
    
    let sql = 'insert into user(username,password,status) values (?,?,?)';
    c.query(sql,[username,password,0],(error,result)=>{
        if(error){
            let s = {"status":"error"};
            response.send(s);
        }
        else{
            let s = {"status":"Created"};
            response.send(s);
        }
    })

});

app.get('/Getuser',(request,response)=>{
    let sql = 'select * from user';
    c.query(sql,(error,result)=>{
        if(error){
            response.send(error);
        }
        else{
            response.send(result);
        }
    })
});

app.delete('/Deleteuser/:id',(request,response)=>{
    let {id} = request.params;

    let sql = 'delete from user where id=?';
    c.query(sql,[id],(error,result)=>{
        if(error){
            let s = {"status":"error"};
            response.send(s);
        }
        else{
            let s = {"status":"Deleted"};
            response.send(s);
        }
    })

})

app.get('/Getparuser/:id',(request,response)=>{
    let {id} = request.params;

    let sql = 'select * from user where id=?';
    c.query(sql,[id],(error,result)=>{
        if(error){
            response.send(error);
        }
        else{
            response.send(result);
        }
    })

});

app.put('/Updateuser/:id',(request,response)=>{
    let {id} = request.params;
    let {username,password} = request.body;

    let sql = 'update user set username=?,password=? where id=?';

    c.query(sql,[username,password,id],(error,result)=>{
        if(error){
            let s = {"status":"error"};
            response.send(s);
        }
        else{
            let s = {"status":"updated"};
            response.send(s);
        }
    })

})


app.listen(3004);

