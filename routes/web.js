import app from "express";
import * as catPage from "../controllers/catPage.js";
import connection from "../configs/DBConnection.js";
let router = app.Router();

let initWebRoutes = (app) => {
    router.get('/template/:id', catPage.viewDog);

    return app.use("/", router);
}


// let initWebRoutes = (app) => {
//     // router.get("/home", catPage.getPage);
//     // return app.use("/", router);
// }

export default initWebRoutes;