require('dotenv').config()
const PRODUCTION = require("./production")
const DEVELOPMENT = require("./development")
const STATGING = require("./statging")
const QA = require("./qa")
const CI = require("./ci")
const { NODE_ENV } = process.env;

let currentEnv = DEVELOPMENT;

if(NODE_ENV === "production"){
   currentEnv = PRODUCTION;  
}else if (NODE_ENV === "QA"){
    currentEnv = QA;    
}

module.exports = currentEnv;