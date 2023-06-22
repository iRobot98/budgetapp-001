const { request_log, general_log } = require("./utilities")


const request_logger = (req, res, next) => {

    const { headers, httpVersion, method, originalUrl, ip } = req

    res.on("finish", () => {
        const { statusCode } = res

        general_log(`${statusCode} ${method} ${ip} ${originalUrl}`)
    })

    const data = {
        time: Date.now(),
        url_string: `${method} ${originalUrl} ${ip}`,
        headers, httpVersion,
    }
    request_log(data)
    next(); return;






    next()
}
module.exports = request_logger