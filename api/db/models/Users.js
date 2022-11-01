const db = require("../db");

const S = require("sequelize");

const bcrypt = require("bcrypt");

class Users extends S.Model {
  validatePassword(password) {
    return bcrypt
      .hash(password, this.salt)
      .then((hash) => hash === this.password);
  }
}

Users.init(
  {
    username: { type: S.STRING, allowNull: false, unique: true },
    email: {
      type: S.STRING,
      allowNull: false,
      isEmail: true,
    },
    password: {
      type: S.STRING,
    },
    salt: {
      type: S.STRING,
    },
  },
  {
    sequelize: db,
    modelName: "user",
  }
);

Users.beforeCreate((user) => {
  user.salt = bcrypt.genSaltSync(8);

  return bcrypt.hash(user.password, user.salt).then((hash) => {
    user.password = hash;
  });
});

module.exports = Users;
