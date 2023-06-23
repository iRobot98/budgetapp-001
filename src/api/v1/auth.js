// const router = require("../../router_import");
const router = require('express').Router()

const tmp = (req,res)=>{
    const {file, files, body}= req
    console.log("file:",file,"\nfiles:",files,"\nbody:",body)
    // console.log(req)
    res.send({tmp:"tmp"})
} 
router.get("/log-in",tmp)
router.post("/log-in",tmp)
router.post("/sign-up",tmp)
router.post("/new-refresh-token",tmp)
router.post("/new-access-token",tmp)
router.post("/log-out",tmp)
router.post("/log-out-all",tmp)

module.exports = router