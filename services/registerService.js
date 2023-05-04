import connection from "../configs/DBConnection.js";
import bcrypt from "bcrypt";

let createNewUser = (data) => {
    return new Promise (async(resolve, reject) => {

        let isEmailExist = await checkExistEmail(data.email);
        if(isEmailExist) { 
            reject(
                `This email already exists.`);
        } else {
            // hash password
            const hashedPwd = await bcrypt.hash(data.password, 10);
            let newUser = {
                username: data.username,
                email: data.email,
                password: hashedPwd,
            };

            // create a new account
            connection.query(
                "INSERT INTO users set ? ", newUser, function(err, rows) {
                    if(err) {
                        console.log("err");
                        reject(false);
                    }
                    resolve("Creating a new user successful");
                }
            );
        }
    });
};

let checkExistEmail = (email) => {
    return new Promise((resolve, reject) => {
        try{
            connection.query(
                "SELECT * FROM users WHERE `email` = ?", email,
                function(err, rows) {
                    if(err) {
                        reject(err);
                    }
                    if(rows.length > 0) {
                        resolve(true);
                    } else {
                        resolve(false);
                    }
        
                }
            );
        } catch (err) {
            reject(err);
        }
    });
};

export default { createNewUser };