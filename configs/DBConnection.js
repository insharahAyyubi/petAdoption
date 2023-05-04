import * as dotenv from 'dotenv';
dotenv.config();
import mysql from "mysql2";

let connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("Database connected!");
});

connection.query(
    "CREATE TABLE IF NOT EXISTS users(userid INT NOT NULL AUTO_INCREMENT, username varchar(20) NOT NULL, email varchar(255) NOT NULL, password varchar(255) NOT NULL, PRIMARY KEY(userid));",
    (err, result) => {
        if(err){
            console.log(err);
        } else {
            console.log("Table users created");
        }
    }
);

export default connection;