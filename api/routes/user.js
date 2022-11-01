const express = require("express");
const { generateToken, validateToken } = require("../config/tokens");
const router = express.Router();

const {Users} = require("../db/models/")

router.post("/sign", (req, res, next) => {
  Users.create(req.body)
    .then((user) => res.status(201).send(user))
    .catch((err) => console.log(err));
});

router.post("/log", (req, res, next) => {
  const { email, password } = req.body;
  Users.findOne({
    where: { email },
  }).then((user) => {
    if (!user) return res.sendStatus(401);

    user.validatePassword(password).then((isValid) => {
      if (!isValid) return res.sendStatus(401);
      else {
        const payload = {
          email: user.email,
          username: user.username,
        };
        const token = generateToken(payload);
        res.cookie("token", token).send(payload);
      }
    });
  });
});

router.get("/count", (req, res) => {
  const token = req.cookies.token;
  const { payload } = validateToken(token);
  res.send(payload);
});

router.get("/me", (req, res)=>{
    const token = req.cookies.token;
    if(!token) return res.sendStatus(401);
    const { payload } = validateToken(token);
    if(!payload) return res.sendStatus(401);
    res.send(payload)
})

module.exports = router;
