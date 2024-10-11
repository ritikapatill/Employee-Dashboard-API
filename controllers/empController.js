const asyncHandler = require("express-async-handler");
const Employee = require("../model/empModel");

const getEmp = asyncHandler(async (req, res) => {
  const emp = await Employee.find();
  res.status(200).json(emp);
});
// // const getEmp = asyncHandler(async (req, res) => {
// //   const emp = await emp.findById(req.params.id);
// //   if (!emp) {
// //     res.status(404);
// //     throw new Error("emp not found");
// //   }
//   res.status(200).json(emp);
// });
const updateEmpById= asyncHandler(async (req, res) => {
  const emp = await Employee.findById(req.params.id);
  if (!emp) {
    res.status(404);
    throw new Error("emp not found");
  }
  const updatedEmp = await Employee.findByIdAndUpdate(req.params.id, req.body,{
    new:true
  })
  res.status(200).json(updatedEmp);
});
const deleteEmp = asyncHandler(async (req, res) => {
    const emp = await Employee.findByIdAndDelete(req.params.id); 
    if (!emp) {
      res.status(404);
      throw new Error("emp not found");
    }
    res.status(200).json(emp);
  });
  
const addEmp = asyncHandler(async (req, res) => {
  console.log(req.body);
  const {
    firstName,
    lastName,
    email,
    dob,
    gender,
    education,
    company,
    experience,
    package,
  } = req.body;
  // if (
  //   !firstname ||
  //   !lastname ||
  //   !Email ||
  //   !dob ||
  //   !gender ||
  //   !Education ||
  //   !Company ||
  //   !Exp ||
  //   !Package
  // ) {
  //   res.status(400);
  //   throw new Error("All fields are mandatory");
  // }
  const emp = await Employee.create({
    firstName,
    lastName,
    email,
    dob,
    gender,
    education,
    company,
    experience,
    package,
  });
  res.status(200).json(emp);
});
module.exports = { getEmp, updateEmpById, deleteEmp, addEmp };
