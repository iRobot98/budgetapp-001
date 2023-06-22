const cp = require("child_process")


const logger = (req, res, next) => {
    const { headers, httpVersion, method, originalUrl, ip } = req
    const data = JSON.stringify({
        time: ((new Date).toUTCString()),
        url_string: `${method} ${originalUrl} ${ip}`,
        headers: headers, httpVersion,
    })
    console.log(data)

    next()
}
module.exports = logger