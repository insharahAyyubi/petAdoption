import connection from "../configs/DBConnection.js";
import bcrypt from "bcrypt";

let findUserByEmail = (email) => {
    return new Promise((resolve, reject) => {
        try{
            connection.query(
                'SELECT * FROM users WHERE `email` = ?', email,
                function(err, rows) {
                    if (err) {
                        reject(err)
                    }
                    let user = rows[0];
                    resolve(user);
                }
            );
        } catch (err) {
            reject(err);
        }
    });
};

let findUserById = (userid) => {
    return new Promise((resolve, reject) => {
        try {
            connection.query(
                ' SELECT * FROM `users` WHERE `userid` = ?  ', [userid],
                function(err, rows) {
                    if (err) {
                        reject(err)
                    }
                    let user = rows[0];
                    console.log(user);
                    
                    resolve(user);
                }
            );
        } catch (err) {
            reject(err);
        }
    });
};

let comparePassword = (password, userObject) => {
    return new Promise(async(resolve, reject) => {
        try {
            await bcrypt.compare(password, userObject.password)
            .then((isMatch) => {
                if(isMatch) {
                    resolve(true);
                } else {
                    resolve(`Password entered is incorrect`);
                }
            });
        } catch (e) {
            reject(e);
        }
    });
};

export default { comparePassword, findUserByEmail, findUserById };