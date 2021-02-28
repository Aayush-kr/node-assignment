//IMPORT PACKAGES
const axios = require('axios');

//GET: HTTP REQUEST
function requestServer(data)  {
    return axios.get(data.url, { timeout: 5000 })
        .then((res) => {
            if (res.status >= 200 && res.status <= 299) {
                return { ...data, online: true };
            }
        })
        .catch((err) => {
            return { online: false, ...data };    
    });
}

//EXPORTING MODULE
module.exports = requestServer;