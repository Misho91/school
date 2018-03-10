const nodemailer = require('nodemailer');


function emailRouter(aaa,ss) {





let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'learn.informacyan@gmail.com',
        pass: 'msha_2018'
    }
});

let mailOptions = {
    from: 'misha.avetisyan.1991@gmail.com',
    to: aaa,
    subject: 'Sending Email using Node.js',
    text: 'your code! '+ ss
};

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});

}

module.exports = emailRouter;