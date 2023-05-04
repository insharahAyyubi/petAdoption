import connection from "../configs/DBConnection.js";
import fetch from "node-fetch";

let viewDog = async (req,res) => {
    // let jsonData = {};
    // async function logJSONData() {
    //     const response = await fetch("https://dogapi.dog/api/v2/facts");
    //      jsonData = await response.json();
      
    //   }
    //   logJSONData();
    //   console.log(jsonData);
    const id = req.params.id;
    connection.query('SELECT * FROM dogdetails WHERE dogID = ?', [id], (err, results, fields) => {
        if(err)
        {
            console.log(err);
            return res.status(400).send();
        }
        const dogData = results[0];
        res.render("template", { pet:"dog", id:id,
          ...dogData});
    });
};
let viewCat = async (req,res) => {
    const id = req.params.id;
    connection.query('SELECT * FROM catdetails WHERE catID = ?', [id], (err, results, fields) => {
        if(err)
        {
            console.log(err);
            return res.status(400).send();
        }
        const catData = results[0];
        res.render("template", {pet:"cat", id:id, ...catData});
    });
};

let viewCardDog = async(req, res) => {
    connection.query('SELECT * FROM dogdetails', (err, results, fields) => {
        if(err) {
            console.log(err);
        }
        // console.log(results);
        res.render("adoptDog", {data: results});
    });
};

let viewCardCat = async(req, res) => {
    connection.query('SELECT * FROM catdetails', (err, results, fields) => {
        if(err) {
            console.log(err);
        }
        res.render("adoptCat", {data: results});
    });
};

export {viewDog, viewCat, viewCardDog, viewCardCat};

