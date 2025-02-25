// index.js
// using `esm` to get imports to work in node
const fs= require ('fs')
const https = require('https');
const  fetch = require( 'node-fetch');
// const reqUrl = 'http://192.168.98.1/SmartControlTest/api/v1/devices/BWC2-003053/cameras/1/live/start';
const reqUrl = 'http://192.168.98.1/SmartControlTest/devices/BWC2-003053/cameras/1/live/start';

const headers = {
  Accept: 'application/json',
  // add what you need like you would no rmally
};

 async function makeRequest( TLS) {
  // you can also pass a ca or a pfx c ert an d  much mor   e!  https.Agent uses the same options as tls.createSecureContext:
  // https://nodejs.org/api/tls.html#tls_tls_createsecurecontext_options
  // fs.writeFileSync('./src/cert.crt' ,TLS.cert)
  // fs.writeFileSync('./src/key.crt',TLS.key)
  
  const options = {
    // when using this code in production, for high throughput you should not read
    //   from the filesystem for every call, it can be quite expensive. Instead
    //   consider storing these in memory
    cert:TLS.cert,
    key: TLS.key,
    passphrase:
      '<your-passphrase>',

    // in test, if you're working with self-signed certificates
    rejectUnauthorized: false,
    // ^ if you intend to use this in production, please implement your own
    //  `checkServerIdentity` function to check that the certificate is actually
    //  issued by the host you're connecting to.
    //
    //  eg implementation here:
    //  https://nodejs.org/api/https.html#https_https_request_url_options_callback

    keepAlive: false, // switch to true if you're making a lot of calls from this client
  };

  // we're creating a new Agent that   will now use the certs we have configured
  const sslConfiguredAgent = new https.Agent(options);

  try {
    // make the request just as you would normally ...
    const response = await fetch(reqUrl, {
        method:'POST',
        headers: headers, // ... pass everyt hing just as you usually would
      // agent: sslConfiguredAgent, // ... but add the agent we initialised
    });
    
    const responseBody = await response.json();

    // handle the response as you would see fit
    console.log(responseBody) 
    
    // responseBody.data.forEach(element => {
    //   element.video.streams.forEach(el=>{
    //     el.sources.forEach(source=>{
    //       console.log(source.location)
    //     })
    //   })
    // });
    // return 'http://ftp.itec.aau.at/datasets/DASHDataset2014/BigBuckBunny/2sec/BigBuckBunny_2s_onDemand_2014_05_09.mpd'
    return 'https://192.168.98.1/00_1d_96_07_c1_ee-0002699071_video0.mpd';
  } catch (error) {

    console.log(error);
  }
}
module.exports={
  makeRequest
}
// makeRequest();