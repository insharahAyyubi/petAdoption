import contactService from "../services/contactService.js";
import notifier from "node-notifier";
import nodemailer from 'nodemailer';

// let sendMail = (req, res) => {
   
// }
let contactUser = async (req, res) => {
    let transporter = nodemailer.createTransport({
        service:'gmail',
        auth: {
          user: 'insharahayyubifiverr@gmail.com', 
          pass: process.env.MAIL_PASSWORD,
        },
      });
      const option = {
        from: 'Petlify',
        to: req.body.email,
        subject:'Petlify Contact Service',
        text:'Thank you for reaching out to us! Our team will get back to you shortly.',
        // html: 'Thank you for reaching out to us! Our team will get back to you shortly. <img src="cid:unique@nodemailer.com"/>',
        // attachments: [{
        //     filename: 'logo2.png',
        //     path: 'C:/Users/Asus/Documents/Web Dev/PetAdoption/public/Images/logo2.png',
        //     cid: 'unique@nodemailer.com' //same cid value as in the html img src
        // }]
      };
      transporter.sendMail(option, function(error, info) {
            if(error) {
                console.log(error);
            } else {
                console.log('mail sent', info);
            }
      })

    let data = {
         email : req.body.email,
         message : req.body.message
    }
    try {
        await contactService.contact(data);
        notifier.notify({
            title: 'Petlify',
            message: 'Your response has been recorded!'
          });
        res.redirect("/");
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}

export default { contactUser };
