const dotenv = require("dotenv").config();
const connectDB = require("./database/dbconnection");
const { errorHandler } = require("./middleware/errorhandle");
const cors = require("cors");
const port = process.env.PORT || 5000;
const bcrypt = require('bcrypt');
const express = require("express");
const app = express();
connectDB();
app.use(cors());
app.use(express.json());


// app.use("/newapi/user", require("./userrouter/userRoutes"));
app.use("/newapi/emp", require("./userrouter/empRoutes"));
app.use("/newapi/admin", require("./userrouter/adminRoutes"));
app.use(errorHandler);
app.listen(port, () => {
  console.log("server running on port", port);
});
