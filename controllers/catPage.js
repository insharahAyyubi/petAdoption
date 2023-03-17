import connection from "../configs/DBConnection.js";

let viewDog = async (req,res) => {
    const id = req.params.id;
    connection.query('SELECT * FROM dogdetails WHERE dogID = ?', [id], (err, results, fields) => {
        if(err)
        {
            console.log(err);
            return res.status(400).send();
        }
      // console.log(results);
       res.render("template", {
            id: id,
            name: results[0].Name,
            breed: results[0].Breed,
            city: results[0].City,
            age: results[0].AgeGroup,
            gender: results[0].Gender,
            height: results[0].Height,
            health: results[0].Health
       });
    });
};
export {viewDog};