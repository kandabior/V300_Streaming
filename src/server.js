const https = require('https');
const express = require('express');
const {createCertificate} =require ('./CertificateManager')
const {makeRequest} =require('./RequestHandler')

const options= createCertificate();

const app = express();

app.get('/',  async(req, res) => {
  const result= await makeRequest(options);
  console.log(result)
  // return res.redirect('https://'+req.headers.host+'/192.168.98.1/00_1d_96_07_c1_ee-0002760366_thumbnail.jpg');
});


https
  .createServer(
    options,
    app
  )
  .listen(3000);