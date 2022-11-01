const S = require("sequelize");
const db = require("../db");

class Favorites extends S.Model {}

Favorites.init(
  {
    fav: { type: S.ARRAY(S.JSON) },
  },
  {
    sequelize: db,
    modelName: "fav",
  }
);

module.exports = Favorites;
