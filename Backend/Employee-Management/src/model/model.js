import mongoose from "mongoose";
var Employeeschema = new mongoose.Schema({
  name: {
    //personal Data
    type: String,
   
  },
  email: {
    type: String, 
    unique: true,
  },
  gender: String,
  statuse: String,
  dob: String,
  address: String,
  mobile: Number,
  alternateEmail: {
    type: String,
    
  },
  password:{
    type:String,
   
  },
  //educations
  sslc: String,
  sslcmonth: String,
  sslcCgpa: Number,
  hsc: String,
  hscmonth: String,
  hscCgpa: Number,
  degree: String,
  degreemonth: String,
  degreeCgpa: Number,
  //work Experience
  cmpName: String,
  TotalExp: Number,
  Tech: String,
});
const EmployeeData = mongoose.model("employeeData", Employeeschema);
module.exports = EmployeeData;
export function findOne(arg0, arg1) {
    throw new Error("Function not implemented.");
}

