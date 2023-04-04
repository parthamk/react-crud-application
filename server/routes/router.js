const express = require("express");
const router = express.Router();
const users = require("../models/userSchema");

// router.get("/",(req,res)=>{
//     console.log("connect");
// })

//Register User

router.post("/register", async (req, res) => {
  // console.log(req.body);
  const { name, email, age, mobile, jobrole, addr, desc } = req.body;

  if (!name || !email || !age || !mobile || !jobrole || !addr || !desc) {
    return res.status(422).json("Please fill the data");
  }

  //Check if the user already exists

  // try {

  //     const preuser = await users.findOne({email:email});
  //     console.log(preuser);

  //     if(preuser){
  //        return res.status(422).json("This user is already present")
  //     }else{
  //         const adduser = new users({
  //             name,email,age,mobile,jobrole,addr,desc
  //         })
  //         await adduser.save();
  //         res.status(201).json(adduser)
  //         console.log(adduser);
  //     }

  // } catch (error) {
  //     res.status(422).json(error)
  // }
  try {
    // Check if user already exists with the given email
    const preuser = await users.findOne({ email: email });
    console.log(preuser);

    // If user already exists, return a 409 Conflict response
    if (preuser) {
      return res
        .status(409)
        .json({ message: "This user is already registered" });
    } else {
      // If user does not exist, create a new user document and save it to the database
      const adduser = new users({
        name,
        email,
        age,
        mobile,
        jobrole,
        addr,
        desc,
      });
      await adduser.save();

      // Return a 201 Created response with the new user data
      res.status(201).json(adduser);
      console.log(adduser);
    }
  } catch (error) {
    // Handle other errors by returning a 500 Internal Server Error response with an error message
    console.log(error);
    res.status(500).json({ message: "Error saving user to database" });
  }
});

// Get User

router.get("/getdata", async (req, res) => {
  try {
    const userdata = await users.find();
    console.log(userdata);
    res.status(201).json(userdata);
  } catch (error) {
    res.status(422).json(error);
  }
});

//get individual user

router.get("/getuser/:id", async(req,res)=>{
  try {
    console.log(req.params);
    const {id} = req.params;

    const userindividual = await users.findById({_id:id});
    console.log(userindividual);
    res.status(201).json(userindividual)
    
  } catch (error) {
    res.status(422).json(error)
  }
})


//update user data
router.patch("/updateuser/:id", async(req,res)=>{
  try {
    const {id} =req.params;

    const updateduser = await users.findByIdAndUpdate(id,req.body,{
      new:true
    });

    console.log(updateduser);
    res.status(201).json(updateduser);

  } catch (error) {
    res.status(422).json(error);
  }
})

//delete user
router.delete("/deleteuser/:id", async(req,res)=>{
  try {
    const {id} =req.params;

    const deleteduser = await users.findByIdAndDelete(id);

    console.log(deleteduser);
    res.status(201).json(deleteduser);

  } catch (error) {
    res.status(422).json(error);
  }
})

module.exports = router;
