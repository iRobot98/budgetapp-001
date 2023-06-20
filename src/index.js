const logger = require("./log")
const router = require("./router_import")


router.use("*", logger, (req, res, callNext) => {
    const { ip, method, originalUrl } = req

    res.on("finish", () => {
        const { statusCode } = res

        console.log(`${statusCode} ${method} ${ip} ${originalUrl}`)
    })

    callNext();
})
router.get("*", require("./file_handling"))

router.use("/api", require("./api"))

module.exports = router