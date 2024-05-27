const axios = require('axios');

//mama function ekk hdnwa lattidue logitude gnna input wdiyt

const getwhether =(lat,lon)=>{
    // mulu prgrm ekmmek athult gn one..
    // e wgema meke .then functions tyn nisa apit promises() dnn wenwa
    return new Promise((resolve,reject)=>{
        const url ="https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&units=Metric&appid=0001bf528744bf149a998335e2abf058"
        
        axios.get(url)  // methn balnne en url ek awlkd kyla .then ,.catch
        .then(function (response) { // handle resolve wenw nm
            //apit denn one console.log ekk neweii
            //console.log("currently "+response.data.weather[0].description+" and temperature is "+response.data.main.temp+"C" );
            resolve({               // 
                wheatherData :'currently'+response.data.weather[0].description+' and temperature is '+response.data.main.temp+'C'})
                    // methn success unma wheatherdata object ek return krnwa
        
            // console.log(response.data);
        })
        .catch(function (error) {// handle rejevct
            //methnth console.log ekk newii onee
            reject({error:'please give me correct locations'}) //mem erro object ek return krnwa
            // console.log("please give me correct locations");
        });

            })

}
module.exports = getwhether; //methn getwhether function ek export krnwa
