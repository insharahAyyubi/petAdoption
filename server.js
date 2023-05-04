import * as dotenv from 'dotenv';
dotenv.config();
import express from "express";
import session from "express-session";
import connectFlash from "connect-flash";
import bodyParser from "body-parser";
import initWebRoutes from "./routes/web.js";
import cookieParser from 'cookie-parser';
import passport from "passport";
import flash from 'express-flash';
import fetch from 'node-fetch';

let app = express();
let port = 8080;

app.set('view engine', 'ejs');

app.use(express.static("./"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(connectFlash());
app.use(flash());

app.use(cookieParser('secret'));

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: false,
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(function (req, res, next) {
    res.locals.user = req.user || null;
    next(); 
});

app.get('/', (req,res) => {
    res.render('home');
})
app.get('/register', (req,res) => {
    res.render('register');
})
app.get('/adoptForm', (req,res) => {
    res.render('adoptForm');
})
app.get('/template/dog/thanks', (req,res) => {
    res.render('thanks');
})
app.get('/template/:pet/login', (req,res) => {
    res.render('login');
})
app.get('/template/:pet/register', (req,res) => {
    res.render('register');
})
app.get('/template/:pet/testimonial', (req,res) => {
    res.render('testimonial');
})
app.get('/testimonial', (req,res) => {
    res.render('testimonial');
})
app.get('/login', (req,res) => {
    res.render('login');
})
fetch('http://localhost:8080/login', {credentials:'include'});

app.get('/thanks', (req,res) => {
    res.render('thanks');
})

initWebRoutes(app);

app.listen(port, () => console.log(`Server is running on port ${port}!`));