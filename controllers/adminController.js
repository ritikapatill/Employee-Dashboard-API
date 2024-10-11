const asyncHandler = require("express-async-handler");
const Admin = require("../model/adminModel");

const registerAdmin = asyncHandler(async (req, res) => {
  console.log(req.body);
  const newAdmin = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  };
  await Admin.create(newAdmin);
  res.json({ message: "Registered the user" });
});

const adminLogin = asyncHandler(async (req, res) => {
  const newAdmin = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  };
  // await newAdmin.find();

  res.json({ message: "Login the user" });
});

module.exports = { registerAdmin, adminLogin };
