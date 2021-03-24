const selfsigned = require('selfsigned');
const pki = require('node-forge').pki;
const fs= require ('fs')


function createCertificate() {
    console.log( "Create certificate...");
    //o: 'Motorola Solutions, Inc', c: 'US', CN: 'PCR Sensor Service CA'
    try {
        const attrs = [{name: 'commonName', value: 'MDC'}, {
            name: 'organizationName',
            value: 'Motorola Solutions, Inc'
        }, {name: 'countryName', value: 'US'}, {name: 'organizationalUnitName', value: 'MDC'}];
        const pems = selfsigned.generate(attrs, {
            keySize: 1024, // the size for the private key in bits (default: 1024)
            days: 7300, // how long till expiry of the signed certificate (default: 365)
            algorithm: 'sha256', // sign the certificate with specified algorithm (default: 'sha1')
            extensions: [{name: 'basicConstraints', cA: true}], // certificate extensions array
            pkcs7: true, // include PKCS#7 as part of the output (default: false)
            clientCertificate: true // generate client cert signed by the original key (default: false)
        });
        fs.writeFileSync('./src/pem',pems.cert)
        return {
            "cert": pems.cert,
            "key": pems.private
            // pems
        }
    } catch (err) {
        console.error( "Couldn't create certificate by error: " + err.message);
        return null;
    }
}

module.exports = {
    createCertificate
};
