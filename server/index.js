const express = require('express');
const cors = require('cors');
const mycon = require('mysql');
const bodyparser = require('body-parser');
const fileupload = require('express-fileupload');
const { response } = require('express');

const app = express();
app.use(cors());
app.use(fileupload());
app.use(bodyparser.json());
app.use(express.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static('public'));

const c = mycon.createConnection({
    host : "localhost",
    port : "3306",
    user : "root",
    password : "Keerthu@545.",
    database : "crud_app"
})

c.connect(function(err){
    if(err){console.log(err);}
    else{console.log('Database Connected');}
});

app.post('/Addemployee',(req,res)=>{
    let {firstname,lastname,emailid,phoneno,password} = req.body;
    
    let sql = 'insert into signup(username,password,firstname,lastname,emailid,phoneno,status) values (?,?,?,?,?,?,?)';

    c.query(sql,[emailid,password,firstname,lastname,emailid,phoneno,0],(error,result)=>{
        if(error){
            let s = {"status":"error"};
            res.send(s);
        }
        else{
            let s = {"status":"Created"};
            res.send(s);
        }
    })

});

app.get('/Employeelist',(req,res)=>{

    let sql = 'select * from signup';

    c.query(sql,(error,result)=>{
        if(error){
            res.send(error);
        }
        else{
            res.send(result);
        }
    })

})

app.listen(3004);