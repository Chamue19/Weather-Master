const axios = require('axios');

const getLocation =(location)=>{
    return new Promise((resolve,reject)=>{
        const url = "http://api.openweathermap.org/geo/1.0/direct?q="+location+"&limit=1&appid=0001bf528744bf149a998335e2abf058"
        axios.get(url)
        .then(function (response) { // handle success
            // methndi console log ekk neweii object ekk wdiyt return knni one
           // console.log("latitude is " +response.data[0].lat+" logitude is "+response.data[0].lon +" in "+ response.data[0].state);
           //then ekdi wenn succus wen eknee ek nis resolve krmu
              resolve({
                lat:response.data[0].lat,
                lon:response.data[0].lon }) //mew ywnne object wdiyt eki eky value pair  wdiyt dmme
        
            // console.log(response.data);
              
        })
        .catch(function (error) {// handle error
            
            // console.log("enter the correct location name,this cand find");
            reject({error:"enter the correct location name,this cand find"}) //methn error object ek return krnwa
        
        });

     })
    
}
module.exports = getLocation; //methn getLocation function ek export krnwa




