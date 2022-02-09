const express = require("express");
// const bodyParser = require("body-parser"); /* deprecated */
const compression = require('compression');
const app = express();
const cors = require('cors')
let apiRoutes = require("./app/routes/api-rout");
const PORT = process.env.PORT || 3000;
app.use(cors('X-Total-Count'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const db = require("./app/models");
db.sequelize.sync();
if (!db)
  console.log("Error connecting db")
else
  console.log("Db connected successfully")
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to api." });
});

app.use(cors()) // Use this after the variable declaration
app.use(compression());
app.use((req, res, next) => {
  res.header("Access-Control-Expose-Headers: Content-Range");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers",'X-Total-Count', "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  if (req.method === 'OPTIONS') {
    res.header("Access-Control-Allow-Methods", "PUT, POST, DELETE, GET, PATCH");
    return res.status(200).json({});
  }
  next();
});
app.use('/api', apiRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
