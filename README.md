# node-assignment

# Fetch online least priority server

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

In the test directory pull this repo and install required dependencies:

    npm install to install module dependencies.
    jest,axios
    
Open your project in your IDE and run file index.js to see the results.    

    In the project dir replace the content of data.json with your data in same format to test.
    

On your command line run 'npm test' to run test cases for unit testing of the package.
   









