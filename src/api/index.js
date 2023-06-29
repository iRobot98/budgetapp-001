const router = require("../router_import")


const multer  = require('multer')
const upload = multer()

router.use("*",require("cors")())
router.use("/v1", upload.none(),require("./v1"))

module.exports = router