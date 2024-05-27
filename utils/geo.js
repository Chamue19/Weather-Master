const axios = require('axios');

const location = "kurunegala";
const url = "http://api.openweathermap.org/geo/1.0/direct?q="+location+"&limit=1&appid=0001bf528744bf149a998335e2abf058"

axios.get(url)
   .then(function (response) { // handle success
       console.log("latitude is " +response.data[0].lat+" logitude is "+response.data[0].lon +" in "+ response.data[0].state);
    
   
       // console.log(response.data);
   })
   .catch(function (error) {// handle error
    
       console.log("enter the correct location name,this cand find");
   });
