const wform = document.querySelector('form'); // get the form element
const search = document.querySelector('input'); // get the input element
const loc = document.querySelector('#loc'); // get the location element massage eka
const we = document.querySelector('#we'); // get the temperature element

wform.addEventListener('submit',(e)=>{ // add event listener to the form element
    e.preventDefault(); // page ek serch buton ek oon wen gnt refreshh wen nis apit mkuth blgnn bss..ek ain krnwa

    const location = search.value; // get the value of the input element
    loc.textContent = "Loading..."; // set the location to loading
    we.textContent = ""; // set the temperature to empty

    //front end java script wl data fetch krgnn onee arke axios wge

    fetch(`/wheather?address=${location}`) // methn enn promise ekk
    .then((response)=>{ // fetch the data from the server
        response.json() //methnth promise ekk enwa
        .then((data)=>{ // get the json data
            if(data.error){ // if there is an error
                loc.textContent = data.error; // set the location to the error
            }else{ // if there is no error
               
                loc.textContent = location; // set the location to the location
                we.textContent = data.wheatherData; // set the temperature to the temperature
            }
        })
    })

    //  console.log("submit"); // log the location
})