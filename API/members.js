const express = require("express");
const router = express.Router();
const users = require("../../Users");

router.get("/", (req, res) => {
  res.send(users);
});

router.get("/:userName", (req, res) => {
  var userval = req.params.userName;
  var user = users.find((obj) => obj.username == userval);
  if (user == undefined) {
    res.send("user is not found");
    console.log(user);
  } else {
    console.log(user);
    res.send(user);
  }
});

router.post("/", (req, res) => {
  const newUser = {
    username: req.body.username,
    name: req.body.name,
  };
  if (!newUser.username || !newUser.name) {
    res.json({ msg: "please enter username & name" });
  } else {
    users.push(newUser);
    res.json(users);
  }
});

router.put("/:username", (req, res) => {
  const found = users.find((obj) => obj.username == req.params.username);
  if (found == undefined) {
    res.status(404).json({ msg: "error, there is no username found" });
  } else {
    const updatedName = req.body;
    if (!req.body.name || !req.body.username) {
      res.json({ msg: "error, please enter name and username" });
    } else {
      found.name = updatedName.name;
      found.username = updatedName.username;
      res.json({ msg: "user updated", users });
    }
  }
});

router.delete("/:username", (req, res) => {
  const found = users.find((obj) => obj.username == req.params.username);
  if (found == undefined) {
    res.status(404).json({ msg: "error, there is no username found" });
  } else {
    const index = users.indexOf(found);
    users.splice(index, 1);
    res.json({ msg: "deleted", users: users });
  }
});

module.exports = router;
