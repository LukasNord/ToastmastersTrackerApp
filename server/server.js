const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 5000;


app.use(express.static('server/public'));
app.use( bodyParser.urlencoded( {extended: true} ) );

app.listen(port, ()=>{
    console.log('server is up on :', port); 
})

//routes

app.post('/createCohort', function(req,res){
    console.log(req.body);
    res.sendStatus(200);
});