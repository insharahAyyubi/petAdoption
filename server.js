import * as dotenv from 'dotenv';
dotenv.config();
import express from "express";
import path from "path";
import session from "express-session";
import connectFlash from "connect-flash";
import bodyParser from "body-parser";
import initWebRoutes from "./routes/web.js";
import connection from "./configs/DBConnection.js"

let app = express();
let port = 8080;

app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("./"));

app.get('/', (req,res) => {
    res.render('home');
})
app.get('/home', (req,res) => {
    res.render('home');
})
app.get('/register', (req,res) => {
    res.render('register');
})
app.get('/adoptCat', (req,res) => {
    res.render('adoptCat');
})
app.get('/adoptDog', (req,res) => {
    res.render('adoptDog');
})

app.get('/template/adoptForm', (req,res) => {
    res.render('adoptForm');
})
app.get('/template/thanks', (req,res) => {
    res.render('thanks');
})
app.get('/testimonial', (req,res) => {
    res.render('testimonial');
})

 initWebRoutes(app);

app.listen(port, () => console.log(`Server is running on port ${port}!`));