const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const nodemailer = require("nodemailer");
const keys = require('./config/keys');


const app = express();
var smtpTransport = nodemailer.createTransport({
    service: "gmail",
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    
    auth: {
        user: keys.google.email,
        pass: keys.google.clientSecret
    }
});



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false}));




app.use(function(req, res, next) { //allow cross origin requests
    res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Credentials", true);
    next();
});

app.use(express.static(path.join(__dirname, '../dist')));
app.get('*', (req, res )=>{
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});





app.post('/contactme', function(req,res){
        const mailOptions = {
            from: req.body.email,
            to: 'alcreates101@gmail.com',
            subject: req.body.subject,
            text: req.body.message 
        }
        smtpTransport.sendMail(mailOptions, function(error, response){
            if(error){
                   console.log(error);
               res.end("error");
            }else{
                   console.log("Message sent: " + response.message);
               res.end("sent");
                }
       });
});

const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

server.listen(port, () => console.log(`API running on localhost:${port} `));