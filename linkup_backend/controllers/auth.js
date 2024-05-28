import { db } from "../connect.js";
import bcrypt from "bcryptjs";//for hashing password to make it more secure
import jwt from "jsonwebtoken";

// Always make sure that the order of the (req, res) in it first it send request and then response comes so the order is (req, res) not (res, req)
export const register = (req, res) => {
  // CHECK USER IF EXISTES
  const q = "SELECT * FROM users WHERE username = ?";

  db.query(q, [req.body.username], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length) return res.status(409).json("User already exists!");

    // IF NOT CREATE NEW USER
    //HASH THE PASSWORDS
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);

    const q ="INSERT INTO users (`username`, `email`, `password`, `name`) VALUE (?)";

    const values = [
      req.body.username,
      req.body.email,
      hashedPassword,
      req.body.name,
    ];
    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("User has been created...!");
    });
  });
};

export const login = (req, res) => {
  const q = "SELECT * FROM users WHERE username = ?";

   db.query(q, [req.body.username], (err, data)=>{
    if(err) return res.status(500).json(err);

    if(data.length===0) return res.status(404).json("User Not Found!");

    const checkPassword= bcrypt.compareSync(req.body.password, data[0].password);

    if(!checkPassword) return res.status(400).json("Wrong username or password!");

    const token = jwt.sign({id:data[0].id}, "secretkey");  

    const {password, ...others}= data[0];//this will seperate the password from data


    //this accesstoken will return the user's all info included in the "others" which we are going to use after loging to display info and while deleting the post
  
    res.cookie("accessToken", token, {
      httpOnly: true,
    }).status(200).json(others);
   })


};

export const logout = (req, res) => {
  res.clearCookie("accessToken", {
    secure: true,
    sameSite:"none"
  }).status(200).json("User has been logged out");
};
