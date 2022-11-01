const express = require("express");
const cors = require("cors");
const app = express();
const routes = require("./routes/");
const models= require("./db/models")
const db= require("./db/db")
const cookieParser= require("cookie-parser")

app.use(express.json());
app.use(cors());
app.use(cookieParser())

app.use("/api", routes);

db.sync({force: false })
.then(function () {
    app.listen(3001, () => console.log("Listening on PORT 3001"));
  })
  .catch(console.error)
