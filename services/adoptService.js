import connection from "../configs/DBConnection.js";

let newApply = (data) => {
    return new Promise (async(resolve, reject) => {
        // create a new account
        connection.query(
            "INSERT INTO adoptdetails SET ? ", data, function(err, rows) {
                if(err) {
                    console.log("err");
                    reject(false);
                }
                resolve("Adoption successful");
              
            }
        );
        if(data.pet == "cat") {
            connection.query(
                "UPDATE catdetails SET adopted = 'yes' WHERE catID = ? ", data.petID, function(err, rows) {
                    if(err) {
                        console.log("err");
                    }
                }
            );
        }
        else {
            connection.query(
                "UPDATE dogdetails SET adopted = 'yes' WHERE dogID = ? ", data.petID, function(err, rows) {
                    if(err) {
                        console.log("err");
                    }
                }
            );
        }
    });
};

export default { newApply };