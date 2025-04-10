// NodeJS is the language
// express is nodeTest, a node module 

const express = require('express');
// An app is the express function called createApplication inside the express module
const app = express();
const port = 3001;

// al is a method, and it takes two args: 1. route 2.callback to run if the route is requested

app.all('/', (req, res) => {
// express hadles the basic header: status code(200, 404 etc, ) and mime-type
res.send('<h1>This is the homepage!!</h1>')
// express handles the end too! 
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });