var express= require('express');
app= express();
var middleware= require('./middleware.js');

var port= process.env.port || 8080;

app.use(middleware.RestrictGetCall);

app.get("/", function (req,res) { 

    console.log("try")
 })

app.listen(port, function(){
console.log("Server is up");
})