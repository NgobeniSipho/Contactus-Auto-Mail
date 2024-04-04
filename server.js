const express= require('express');
const app = express();
const nodemailer = require("nodemailer");

const PORT = process.env.PORT|| 5000;

//middleware
app.use(express.static('public'));
app.use(express.json());

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/public/contactform.html')
})

//requsting data from frontend 
const mypass = "nurn wnbr ipvf cjyi";
app.post('/', (req,res) => {
    console.log(req.body)

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: 'sipho00716@gmail.com',
            pass: mypass
        }
    })

    const mailOption = {
        // from: req.body.email,
        to: 'sipho00716@gmail.com',
        subject: `Message from ${req.body.email}  Subject: ${req.body.subject}`,
        text: req.body.message
    }

    transporter.sendMail(mailOption, (error,infor) => {
        if(error){
            console.log(error);
            res.send(error)
        }else{
            res.send('Email sent!!');
        }
    })
})

app.listen(PORT, () => {
    console.log(`Serer running on port ${PORT}`)
})