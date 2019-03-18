const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 8000;

const Users = [];

app.use("/public", express.static('public'));
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "views/", "git.html"));
});
app.post("/", (req, res) => {
    Users.push(req.body);
    res.redirect('/');
})
app.listen(PORT, () => {
    console.log("http://localhost:" + PORT);
});