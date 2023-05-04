import connection from "../configs/DBConnection.js";

let contact = (data) => {
    return new Promise (async(resolve, reject) => {
        // create a new account
        connection.query(
            "INSERT INTO contact SET ? ", data, function(err, rows) {
                if(err) {
                    console.log(err);
                    reject(false);
                }
                resolve("Contact successful");
            }
        );
    });
};

export default { contact };