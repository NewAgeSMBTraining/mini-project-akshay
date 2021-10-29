import mongoose from "mongoose";
var LeaveSchema = new mongoose.Schema({
    subject: {
      //personal Data
      type: String,
      required: true,
    },
    leaveType: {
      type: String,
      required: true,
      
    },
    reason:{
        type:String,
        required:true,
    },
    fromDate:{
        type:String,
        required:true
    },
    toDate:{
        type:String,
        required:true
    },
    LeaveStatus:{
      type:String
  },
  username:{
    type:String
  },
  email:{
    type:String
  }
   
  });
  const LeaveData = mongoose.model('leavedata',LeaveSchema)
  module.exports=LeaveData;