
import axios from 'axios'
// import https from 'https'

const instance= axios.create({
    baseURL: 'http://11cfe014a2c5.ngrok.io',
    // httpsAgent: new https.Agent({  
    //     rejectUnauthorized: false
    //   })
});


export default instance;
