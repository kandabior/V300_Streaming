const https = require('https');
const express = require('express');
const {createCertificate} =require ('./CertificateManager')
const {makeRequest} =require('./RequestHandler')

const options= createCertificate();

const app = express();

app.get('/',  async(req, res) => {
  const result= await makeRequest(options);
  //console.log(result)
  //res.sendStatus(200);
  return res.redirect(result);
});


https
  .createServer(
    options,
    app
  )
  .listen(3000);