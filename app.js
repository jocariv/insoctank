
const express = require('express')
const cors = require('cors')
const http=require('http')
//var https = require('https');
var path = require('path');
const fs = require('fs')
var axios = require('axios');
const { send } = require('process');
const bodyParser = require('body-parser');
const multer = require('multer');

const app = express()
const port =process.env.Port || 80

//configuracion del servidor https

/*https.createServer({
  cert: fs.readFileSync('mi_certificado.crt'),
  key: fs.readFileSync('mi_certificado.key')
},app).listen(port, function(){
 console.log('Servidor https correindo en el puerto 80');
});*/


const upload = multer();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(upload.none());



var publicPath = path.resolve(__dirname, 'public');
app.use(express.static(publicPath));

app.use(cors());

let token=false;
let url="http://localhost"

//http://localhost

app.get('/', (req, res) => {


  res.sendFile(__dirname + '/public/login.html');

  app.post('/loginapp',(req,res)=>{

    let login=req.body.login;
    let password=req.body.password;

    //var data = JSON.stringify(req.body);


    if(login==='jrivera@octank.gob.pe' && password==='0ctank2022'){

      token=true;
      console.log(login+" "+ password+" "+token);
      //res.redirect('http://url/admin');
      res.json('ok');

    }else{
      res.json('error');


    }

    app.post("/logout",(req,res)=>{

      token=false;
      res.redirect(url);

    })

    //console.log(data);


  });

})

app.get('/admin',(req, res) =>{

  if(token==true){

    res.sendFile(__dirname + '/public/admin.html');
    console.log(token);

  }else{

    res.redirect(url)

  }

});

app.post('/form',cors(),(req,res)=>{

  //console.log(res);
  //const nombre = req.body; // no se si era body o params así que hice los dos
  var data =JSON.stringify(req.body)/*JSON.stringify({
    "productId": "10003",
    "color": "red",
    "price": 1000
  });*/

  console.log(data);

  
  var config = {
    method: 'post',
    url: 'https://tsg6s7x0zb.execute-api.us-east-1.amazonaws.com/prod/product',
    headers: {
      'Content-Type': 'application/json'
    },
    data : data
  };

  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
    res.json(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });

   //res.json({ data});

})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
