const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const db = require("../config/database");
const Blog = require("../models/Blog");
const User = require("../models/User");
const saltRounds = 10;
const bodyParser = require("body-parser");

router.get("/", (req, res) => {
  Blog.findAll()
    .then((blogs) => {
      res.send(blogs);
    })
    .catch((err) => console.log(err));
});

router.get("/add", (req, res) => {
  const data = {
    title: "Mr jay",
    description:
      "The SQL statement above would insert a new record into the table. The  column would be assigned a unique value. The column would be set to  and the column would be set to Monsen",
  };

  let { title, description } = data;
  Blog.create({
    title,
    description,
  })
    .then((blogs) => res.redirect("/blog"))
    .catch((err) => console.log(err));
});

router.post("/register", (req, res) => {
  const { email, password } = req.body;
  bcrypt.hash(password, saltRounds, function (err, hash) {
    User.create({
      email:email,
      password:hash,
    })
      .then(
        res.status(200).json({
          success: true,
        })
      )
      .catch((err) => res.json({ success: false, err }));
  });
});

router.get('/login',(req,res)=>{
    User.findOne({
        where: {
            email:req.body.email
        }
    }).then(user=>{
        if(!user){
            return res.json({
                loginSuccess:false,
                message:'Email not found'
            })

        }

        bcrypt.compare(req.body.password,user.password,(err,isMatch)=>{
                if(!isMatch)
                return res.json({
                    loginSuccess:false,
                    message:'Invalid password'
                })

                user.generateToken((err,user)=>{})
                
            }
        )
        // if(!passwordIsValid){
        //     return res.json({
        //         loginSuccess:false,
        //         message:'Invalid password'
        //     })
        //     user.generateToken((err, user) =>{
        //         if(err) return res.status(400).send(err)
        //         res.cookie("w_authExp", user.tokenExp)
    
        //     })
        // }


    })

})

module.exports = router;
