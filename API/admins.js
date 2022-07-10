const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send("request code 200");
});

router.get("/:adminname", (req, res) => {
  var adminName = req.params.adminname;
  console.log(adminName);
  res.send(`${adminName}`);
});

module.exports = router;