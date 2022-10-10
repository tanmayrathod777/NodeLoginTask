const router=require("express").Router();
const user=require("../Controller/userController");

// Add User
router.post("/adduser",user.addUser);

//Login 
router.post("/login",user.getUser);

module.exports=router;