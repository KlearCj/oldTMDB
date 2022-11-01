const jwt= require("jsonwebtoken")
const SECRET = "videosdegatos";

const generateToken = (payload) => {
  const token = jwt.sign({payload}, SECRET, {
    expiresIn: "4h",
  });
  return token;
};

const validateToken = (token) => {
    return jwt.verify(token, SECRET);
};

module.exports={ generateToken, validateToken}
