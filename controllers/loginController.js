import { validationResult } from "express-validator";
import loginService from "../services/loginService.js";

let handleLogin = async(req, res) => {
    let errorsArr = [];
    let validationErrors = validationResult(req);
    if (!validationErrors.isEmpty()) {
        let errors = Object.values(validationErrors.mapped());
        errors.forEach((item) => {
            errorsArr.push(item.msg);
        });
        req.flash("errors", errorsArr);
        console.log(errorsArr[0]);
        return res.render("login", { message: errorsArr[0] });
    } 
    try {
        await loginService.handleLogin(req.body.email, req.body.password);
        return res.render("/");
    } catch (err) {
        req.flash("errors", err);
        errorsArr.push(err);
        return res.render("login", { message: errorsArr[0] });
    }
};

let logOut = (req, res, next) => {
    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/');
      });
}

let checkLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        return res.redirect("/login");
    }
    next();
};

let checkLoggedOut = (req, res, next) => {
    if (req.isAuthenticated()) {
        return res.redirect("/");
    }
    next();
};

export default {handleLogin, checkLoggedIn, checkLoggedOut, logOut};