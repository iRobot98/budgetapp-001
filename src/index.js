const logger = require("./log")
const router = require("./router_import")

const DB = require("./DB")
const { general_log } = require("./log/utilities")

router.use("*", logger)
router.get("*", require("./file_handling"))

router.all("/api", require("./api"))


// router.post("/api/v1/auth/log-in",(req,res)=>{
//     res.send({tmp:"tmp"})
//     console.log(req.body)
// })
module.exports = router