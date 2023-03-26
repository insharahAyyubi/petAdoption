import connection from "../configs/DBConnection.js";



let newApply = (data) => {
    return new Promise (async(resolve, reject) => {
        // create a new account
        connection.query(
            "INSERT INTO adoptdetails set ? ", data, function(err, rows) {
                if(err) {
                    console.log("err");
                    reject(false);
                }
                resolve("Adoption successful");
            }
        );
    });
};
export default { newApply };