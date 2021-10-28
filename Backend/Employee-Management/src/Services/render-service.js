exports.mainRoutes = (req, res) => {
  res.send("index");
};

exports.addEmployee = (req, res) => {
  res.send("add-employee");
};

exports.updateEmployee = (req, res) => {
  res.send("update-employee");
};

exports.addLeave=(req,res)=>{
  res.send('add-leave');
};

exports.updateLeave=(rq,res)=>{
  res.send('update-leave');
};

