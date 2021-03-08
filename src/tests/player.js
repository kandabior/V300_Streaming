const  fetch = require( 'node-fetch');

async function player(){
    const headers = {
        Accept: 'application/json',
        // add what you need like you would normally
      };
    const response = fetch('https://192.168.98.1:5554/',{headers:headers});
    const responseBody = await response.json();
    
    console.log(responseBody)
}

player();
