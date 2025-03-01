import dotenv from "dotenv";
dotenv.config();
import userModel from "../models/userModel.js";
import validator from 'validator'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const createToken = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET,{expiresIn:'1h'});
}

const registerUser = async (req,res) => {
    const {name,email,password} = req.body;
    if (!email || !password) {
        return res.json({success:false ,message:"Email and Password is required"})
    }
    try {
        const exists = await userModel.findOne({email});

        if(exists)
        {
            return res.json({success:false,message:"User Already Exists"});
        }

        if (!(validator.isEmail(email))) {
           return res.json({success:false,message:"Enter a valid email"});
        }
        if (password.length<8) {
            return res.json({success:false,message:"Enter a Strong Password"});
            
        }

        //hashed password

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);


        const userData = new userModel({
            name:name,
            email:email,
            password:hashedPassword,
        });

        const user = await userData.save();
        const token = createToken(user._id);
        // res.cookie('token', token, {
        //     httpOnly: true,
        //     secure: true,
        //     sameSite: 'strict',
        //     maxAge: 3600000, // 1 hour
        // });
        res.json({success:true,token:token});

    } catch (error) {
        console.log(error);
        res.json({success:false,message:"error"});
        
    }
}

const loginUser = async(req,res)=>{
 const {email,password} = req.body;
 try {
    const user = await userModel.findOne({email});
    if (!user) {
        res.json({success:false,message:"User not Found"});
    }

    const isMatch = await bcrypt.compare(password,user.password);
    if (!isMatch) {
        res.json({success:false,message:"Invalid Credential"});
    }

    const token = createToken(user._id);
    return res.json({success:true,token:token});
 } catch (error) {
    console.log(error);
    return res.json({success:false,message:"Error"});
    
 }
}

export {registerUser,loginUser};