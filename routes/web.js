import app from "express";
import * as dogPage from "../controllers/dogPage.js";
import auth from "../validation/auth.js";
import registerController from "../controllers/registerController.js"
import loginController from "../controllers/loginController.js"
import passport from "passport";
import initPassportLocal from "../controllers/passportLocalController.js";
import adoptForm from "../controllers/adoptForm.js";

let router = app.Router();

initPassportLocal();

let initWebRoutes = (app) => {
    router.get('/template/dog/:id', dogPage.viewDog);
    router.get('/template/cat/:id', dogPage.viewCat);
    // register route
    router.post(
        '/register', 
        auth.validateRegister,
        registerController.createNewUser);

    //login route
    router.post(
        '/login', 
        auth.validateLogin,
        passport.authenticate('local',{
            successRedirect:"/",
            failureRedirect: "/login",
            successFlash: true,
            failureFlash: true,
            session: true,
        }) 
    );

    router.get('/logout', loginController.logOut);
    
    router.get('/adoptDog', dogPage.viewCardDog);
    router.get('/adoptCat', dogPage.viewCardCat);
    
    router.get('/template/:pet/:id/adoptForm' ,
        loginController.checkLoggedIn, function (req, res, next) {   
            if(req.user) {
                res.render("adoptForm");
            }
        })
    
    router.post('/adoptForm', adoptForm.apply);
      
    return app.use("/", router);
}

export default initWebRoutes;