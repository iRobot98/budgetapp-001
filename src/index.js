const logger = require("./log")
const router = require("./router_import")

const DB = require("./DB")
const { general_log } = require("./log/utilities")

router.use("*", logger)
router.get("*", require("./file_handling"))

router.use("/api", require("./api"))

module.exports = router