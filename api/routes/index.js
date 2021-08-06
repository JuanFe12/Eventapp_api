const  { Router } = require("express")
const cors = require('cors')
const bodyParser = require('body-parser');
const compression = require("compression");
module.exports = function (UserRoutes){
     const router = Router();
     const apiRoute = Router();
     
     apiRoute
     .use(cors())
     .use(bodyParser.json())
     .use(compression());
 
   apiRoute.use("/user", UserRoutes);
   router.use("/api", apiRoute);
 
   return router;
 }
