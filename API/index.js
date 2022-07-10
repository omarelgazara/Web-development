const express = require("express");
const app = express();
const port = 8080;
const logger = require("./middleware/logger");

app.use(logger);
//parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/members", require("./routes/api/members"));
app.use("/api/admins", require("./routes/api/admins"));

app.get("/", (req, res) => {
    setTimeout(function() {
        res.redirect("Users");
    }, 5000);
});

app.get("/osamamosa", (req, res) => {
    res.send("Hello there");
});

app.get("/test", (req, res) => {
    res.sendStatus(404);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});