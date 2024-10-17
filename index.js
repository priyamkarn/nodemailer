var nodejsmailer = require('nodemailer');

var mailOptions = {
    from: 'priyamkarn77@gmail.com',  
    to: 'priyamkarn54@gmail.com',
    subject: "Sending Email to priyam",
    text: "Welcome to NodeMailer, It's Working",
    html: '<h1>Welcome</h1><p>That was easy!</p>'
};

var transporter = nodejsmailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'priyamkarn77@gmail.com', 
        pass: 'your app passcode' 

    }
});

// Send the mail
transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});
