const express = require('express');
const resumeRoute = require('./route/resumeRoute');
const app = express();
app.use(express.json());

app.use('/', resumeRoute);
app.listen(3000, () =>{
    console.log('Server on port 3000');
})