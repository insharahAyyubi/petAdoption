import passportLocal from "passport-local";
import passport from "passport";
import loginService from "../services/loginService.js";

let LocalStrategy = passportLocal.Strategy;

let initPassportLocal = () => {
    passport.use( new LocalStrategy (
        {
            usernameField: "email",
            passwordField: "password",
            passReqToCallback: true,
        },
        async (req, email, password, done) => {
            try{
                console.log("entered email: ", email);
                console.log("enter password: ", password);
                
                await loginService.findUserByEmail(email)
                .then(async(user) => {
                    if(!user) {
                        return done(null, false,
                            {message: `User doesn't exist!`});
                    }
                    if(user) {
                        console.log(user);
                        let match = await loginService.comparePassword(password, user);
                        if(match == true) {
                            return done(null, user, null);
                        } else {
                            return done(null, false, {message: 'Wrong Password!'});
                        }
                    }
                });
            } catch (err) {
                console.log(err);
                return done(null, false,  { message: err });
            }
        }
    ));
};

passport.serializeUser(function(user, done) {
    done(null, user);
  });
  
  passport.deserializeUser(function(user, done) {
    done(null, user);
  });

export default  initPassportLocal;