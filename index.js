//IMPORT PACKAGES
const axios = require('axios');
const sampleData = require('./data');
const requestServer = require('./requestServer');

//CALL ALL THE SERVERS AND GET THE LEAST PRIORITY AVAILABEL SERVER
function findServer(data)  {
    return axios.all(data.map(requestServer)).then(reponses => {
            const server = reponses.filter(request => request.online)
            .sort((x, y) => x.priority - y.priority);
            if (server && server.length) {
                //GETTING LEAST PRIORITY SERVER
                return server[0];
            }
      
    }).catch(err => {
        console.log("No Server is online");
    });
}

//CALLING FIND SERVER FUNCTION TO SEE THE RESULTS.
findServer(sampleData).then(data => console.log(data));

//EXPORTING MODULE
module.exports =  findServer;









