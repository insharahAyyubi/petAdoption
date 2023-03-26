import { check } from "express-validator";

let validateRegister = [
    check("email", "Invalid email").isEmail().trim(),
   
    check("password","Password must be at least 5 characters long.")
    .isLength({ min:5}),

    // check("passwordConfirmation", "Passwords do not match")
    //     .custom((value, {req}) => {
    //         console.log(`value  ${value}`);
    //         return value === req.body.password;
    //     })
];
let validateLogin = [
    check("email", "Invalid email").isEmail().trim(),

    check("password","Invalid Password").not().isEmpty(),
];
const funcs = {
    validateRegister,
    validateLogin,
}
export default funcs;