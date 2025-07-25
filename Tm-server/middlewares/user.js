const jwt = require("jsonwebtoken")
require("dotenv").config();
 const secret = process.env.JWT_SECRET;


function usermiddleware(req,res,next){
    const Authen = req.headers.authorization;

    if(!Authen &&  !Authen.startsWith("Bearer ")){
        res.status(201).json({"Error" :"Plaese Enter Your Token"})
    }

    const Token = Authen.split(' ')[1];

    try{
        const decodedToken = jwt.verify(Token,secret);
        req._id = decodedToken._id;
        next();
    } catch(Error) {
           console.log(Error);
        return res.status(404).json({"Error": "Could not Verify Your Token"})
    }
}

module.exports = usermiddleware
