const express = require('express');
const path = require('path');
const wheather = require('./utils/wheather.js');
 const geo = require('./utils/geo.js');



 // path  ekn public kiyn front end ek tyn thn path ek gnn balmu
 const publicDirectoryPath = path.join(__dirname,'../public');
//  console.log(publicDirectoryPath);

 
 //express() aniwryen mek gnn one
 const app = express();

  //hbs wl documnetation wl munlinm krnn one ewa
  app.set('view engine','hbs');

  app.get('/',(req,res)=>{
    res.render('index');  //send neweii dn ekt kiynne render kiyala...render() method eka
  })

 //dn express wlt front end ek connect krmu..
 app.use(express.static(publicDirectoryPath));// mke use ekn kiynne express ekt me k use krnn kiylaa,,
 //express.static() ekn front end ek connect krnn kiynnwa...static() ekn krnne e path eka wens wnen ne kiyla kiynwa
 



 app.listen(3000,()=>{
    console.log('server is running on port 3000');
})
app.get('/',(req,res)=>{
    res.send('<h1>hello express</h1>');
})
app.get('/API',(req,res)=>{
    res.send('API page');
})
app.get('/wheather',(req,res)=>{
    if(!req.query.address){ // mehem address ekk dila nettn methnin phlt ynne ne
        return res.send('please provide the address');
    }else{
        geo(req.query.address)  // location ek mekt pass wenwa me tik klin ghla tibb code eka
        .then((data)=>{
        // console.log(data.lat,data.lon);
        return wheather(data.lat,data.lon)
        
        .then((data)=>{
            res.send(data);
        })
        .catch((error)=>{
            res.send(error);
        })
    })
    .catch((error)=>{
        res.send(error);
    })

    }
    console.log(); // mem awilla nettn methnin phlt ynne ne
})
app.get('*',(req,res)=>{
    res.send('404 page not found');
})
  


