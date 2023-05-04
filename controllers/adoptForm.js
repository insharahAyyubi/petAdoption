import adoptService from "../services/adoptService.js";
import nodemailer from "nodemailer";

let apply = async (req, res) => {
    let data = {
         fullName : req.body.fullName,
         phone : req.body.phone,
         address : req.body.address,
         city: req.body.city,
         state: req.body.state,
         pet: req.body.pet,
         petID: req.body.petID
    }
    try {
        await adoptService.newApply(data);
        let transporter = nodemailer.createTransport({
            service:'gmail',
            auth: {
              user: 'insharahayyubifiverr@gmail.com', 
              pass: process.env.MAIL_PASSWORD,
            },
          });
          const option = {
            from: 'Petlify',
            to: req.user.email,
            subject:'Adoption Successful',
            text:`Thank you for adopting from Petlify. You can reach out our centre between 9 A.M. to 5 P.M. to make your pet a homie! You couldn't change the pet's past but you can rewrite the future.`,
             html: `Thank you for adopting from Petlify. You can reach out our centre between 9 A.M. to 5 P.M. to make your pet a homie! You couldn't change the pet's past but you can rewrite the future. <img src="cid:unique@nodemailer.com"/>`,
            attachments: [{
                filename: 'kitty (1).png',
                path: 'C:/Users/Asus/Documents/Web Dev/PetAdoption/public/Images/kitty (1).png',
                cid: 'unique@nodemailer.com' //same cid value as in the html img src
            }]
          };
          transporter.sendMail(option, function(error, info) {
                if(error) {
                    console.log(error);
                } else {
                    console.log('mail sent', info);
                }
          })
        res.redirect("/thanks");
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }

}

export default { apply };