const express = require("express")
const router = express.Router()

router.use("/helloworld",(req,res)=>res.send({message:"hello world"}))

module.exports= router