import { validationResult } from "express-validator";
import registerService from "../services/registerService.js";

let createNewUser = async(req, res) => {
    
    let errorsArr = [];
    let validationErrors = validationResult(req);
    if(!validationErrors.isEmpty())
    {
        let errors = Object.values(validationErrors.mapped());
        errors.forEach((item) => {
            errorsArr.push(item.msg);
        });
        console.log(errorsArr);
        return res.render("register.ejs", {expressFlash: errorsArr});
    }

    //create a new user
    let newUser = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    };
    console.log(newUser);
    try{
        await registerService.createNewUser(newUser);
        return res.redirect("/login");
    } catch (err) {
        errorsArr.push(err);
        return res.render("register", {expressFlash: errorsArr});
    }
};
export default { createNewUser };