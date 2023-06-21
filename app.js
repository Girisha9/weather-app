const express = require("express");
const app = express();
const http= require("https");

app.listen(3000,function()
{
    console.log("server is running");
});

app.get("/",function(req,res)
{
    const url ="https://api.openweathermap.org/data/2.5/weather?q=Mumbai&appid=05ad7c5e56e90a66a467de5671d0c18f&units=metric"; 
    http.get(url,function(response)
    {
    console.log(response.statusCode);
    response.on("data",function(data)
    {
        const weaterData = JSON.parse(data);
        const pressure = weaterData.main.pressure;
        console.log(pressure);
        res.write("<h1>weather report</h1>");
        res.write("<h1> the pressure in london cureently is"+ pressure + "rahul</h1>")
        res.send();

    })
    })
   

});