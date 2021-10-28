import express from 'express';
const router = express.Router();
const services = require("../Services/render-service");
const Leavecontroller = require("../controller/leave-controller");


/**
 *@description Add leave
 *@method GET
 */
router.get('/add-leave',services.addLeave);

/**
 *@description Update Leave
 *@method GET
 */
router.get('/update-leave',services.updateLeave)

//API
router.post("/api/addLeave",Leavecontroller.create);
router.put("/api/updateLeave/:id",Leavecontroller.update);
router.get("/api/allleaves",Leavecontroller.find)

  
  export default router
  