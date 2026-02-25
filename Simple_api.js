
const userData = [
    {
        FirstName: "Premkumar",
        LastName: "Savale",
        City: "Burhanpur",
        Role: "Software Developer"
    },
    {
        FirstName: "Vaibhav ",
        LastName: "Savale",
        City: "Burhanpur",
        Role: "Software Developer"
    },



    {
        FirstName: "Raman",
        LastName: "Savale",
        City: "Burhanpur",
        Role: "Logitech "
    },



    {
        FirstName: "Amol Savale",
        LastName: "Savale",
        City: "Burhanpur",
        Role: "Software Developer"
    },


]
const http = require("http");


http.createServer((req, res) => {

    res.setHeader("Content-Type", "application/json");

    res.write(JSON.stringify(userData));

    res.end();


}).listen(2300);
