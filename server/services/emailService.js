const nodemailer = require("nodemailer");
module.exports = async ({ from, to, subject, text, html}) => {
    // console.log(process.env.SMTP_HOST);
        let transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
                user: process.env.MAIL_USER, // generated ethereal user
                pass: process.env.MAIL_PASSWORD, // generated ethereal password
                // authMethod: 'PLAIN'
            },
            tls:{
                rejectUnauthorized: false,
                // secureProtocol: "TLSv1_method"
            }
        
            // tls: {
            //     rejectUnauthorized: false // helpful for debugging (use with caution in prod)
            // },
            // debug: true, // Show debug output
            // logger: true,  // Log information in console  
            // connectionTimeout: 10000, // 10 seconds timeout for the connection
            // greetingTimeout: 5000, // 5 seconds timeout for greeting
            // socketTimeout: 20000, // 20 seconds overall timeout for SMTP transaction
                
        });
    // console.log(transporter);
        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: `inShare <${from}>`, // sender address
            to: to, // list of receivers
            subject: subject, // Subject line
            text: text, // plain text body
            html: html, // html body
        });
        // console.log('Email sent: %s', info);
}