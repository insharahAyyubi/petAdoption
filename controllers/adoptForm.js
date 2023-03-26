import adoptService from "../services/adoptService.js";
import loginController from "./loginController.js";

// let checkLogIn = async(req, res) => {
  
//         if(loginController.checkLoggedIn){
//             console.log("in")
//         res.redirect('/adoptForm');
//         } else {
//             res.redirect('/login');
//         }
   
// } 
// let checkLogIn = loginController.checkLoggedIn();

let apply = async (req, res) => {
    let data = {
         fullName : req.body.fullName,
         phone : req.body.phone,
         address : req.body.address,
         city: req.body.city,
         state: req.body.state,
    }
    try {
        await adoptService.newApply(data);
        res.redirect("/thanks");
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}

export default { apply };