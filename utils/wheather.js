const axios = require('axios');

//mama function ekk hdnwa lattidue logitude gnna input wdiyt

const getwhether =()=>{
    // mulu prgrm ekmmek athult gn one..
    // e wgema meke .then functions tyn nisa apit promises() dnn wenwa
    return Promise((resolve,reject)=>{
                 const url ="https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&units=Metric&appid=0001bf528744bf149a998335e2abf058"
                
                axios.get(url)
                .then(function (response) { // handle resolve wenw nm
                    
                    console.log("currently "+response.data.weather[0].description+" and temperature is "+response.data.main.temp+"C" );

                
                    // console.log(response.data);
                })
                .catch(function (error) {// handle rejevct
                
                    console.log("please give me correct locations");
                });

                    })

}
const lat = 7.549724;
const lon = 80.491304;
