const mongodb = require("mongodb")
const MongoClient = mongodb.MongoClient;

const dbUrl="mongodb+srv://immkp:manas235.x3e0h.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
module.exports={dbUrl,mongodb,MongoClient}