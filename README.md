A node package that determines the availability of a given list of servers and returns an online server having the least priority.

Alt text

example json data

[
    {
        "url": "http://doesNotExist.kratikal.com",
        "priority": 1
    },
    {
        "url": "http://kratikal.com",
        "priority": 7
    },
    {
        "url": "http://offline.kratikal.com",
        "priority": 2
    },
    {
        "url": "http://google.com",
        "priority": 4
    }
]

# Test the package

    On the command line, create a new test directory by the following command
    mkdir test-directory
    Switch to the new directory:
    cd /path/to/test-directory

In the test directory, install your module:

    npm install least-online-priority-server

    In the test directory, create a test.js file which requires your module and calls your module as a method, you can use the below code:

    // import created package
    const findServer = require('least-online-priority-server');
    // this is our example json data
    const sampleData = require('./data');
 
    // use the package to fetch lowest priority server from the json data list
    const response = findServer(data);
 
    // response
    response.then((res) => console.log(res));

   To test the package, on your command line run 'npm test' to run test cases for unit testing.
   




