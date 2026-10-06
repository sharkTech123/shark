const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'r42287615@gmail.com', 
        pass: 'pziwbfonlivsfgvy'
    }
});

// var transporter = nodemailer.createTransport({
//     host: "sandbox.smtp.mailtrap.io",
//     port: 2525,
//     auth: {
//         user: "7e4b35ce6c406a",
//         pass: "6db95f5ea428f2"
//     }
// });

const mailSender = async (type,to,data) => {

    let mailOptions = {
        from: '"Ritik Rana" <r42287615@gmail.com>', // sender address
        to: to, // list of receivers
        subject: 'New Contact Request', // Subject line
        text: "message", // plain text body
        html: '<b>Hello world!</b>' // html body
    };


    if(type=="User" ){
        mailOptions["html"]=`<b>Name : </b>${data.name}</b> <br/><b>Email : </b>${data.email}</b> <br/><b>Phone Number : </b>${data.phoneNumber}</b> <br/><b>Message : </b>${data.message}</b>`
        mailOptions["subject"]="Your Ressponse Recorded"
    }
    if(type=="Admin"){
        mailOptions["to"]="admin@smartlearner.com"
        mailOptions["html"]=`<b>Name : </b>${data.name}</b> <br/><b>Email : </b>${data.email}</b> <br/><b>Phone Number : </b>${data.phoneNumber}</b> <br/><b>Message : </b>${data.message}</b>`
        mailOptions["subject"]="New Contact Request"
    }
    try {
        // Send email
        let info = await transporter.sendMail(mailOptions);
    } catch (error) {
    }
};

// Export the mailSender function for use in other modules
module.exports = mailSender;