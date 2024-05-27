const express = require('express');
const wheather = require('./utils/wheather.js');
 const geo = require('./utils/geo.js');



 //express() aniwryen mek gnn one
 const app = express();

 app.listen(3000,()=>{
    console.log('server is running on port 3000');
})
app.get('/',(req,res)=>{
    res.send('hello express');
})
app.get('/API',(req,res)=>{
    res.send('API page');
})
app.get('/wheather',(req,res)=>{
    console.log(req.query.location); //
})
app.get('*',(req,res)=>{
    res.send('404 page not found');
})
  
// geo('piduruwella')
// .then((data)=>{
//     // console.log(data.lat,data.lon);
//     return wheather(data.lat,data.lon)
    
//     .then((data)=>{
//         console.log(data);
//     })
//     .catch((error)=>{
//         console.log(error);
//     })
// })
// .catch((error)=>{
//     console.log(error);
// })

