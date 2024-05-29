// const { Person } = require("./person");
const dotenv = require("dotenv");
const connectToDatabase = require("./src/database/connect");

dotenv.config();

(async () => {
    await connectToDatabase();

//require("./modules/path");
// require("./modules/fs");       
// require("./modules/http");
})();
require("./modules/express");

// const person = new Person('Vinicius');

