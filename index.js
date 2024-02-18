//initiallize express
const express = require("express");
const PORT = 8000;

//initiallize app
const app = express();

//set view engine
app.set("view engine", "ejs");

//server listen
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})