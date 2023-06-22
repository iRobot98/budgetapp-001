const cp = require("child_process")

const log_proc = cp.fork("./src/log/logger_cp.js")


const logger = (req, res, next) => {
    const { headers, httpVersion, method, originalUrl, ip } = req
    const data = JSON.stringify({
        time: ((new Date).toUTCString()),
        url_string: `${method} ${originalUrl} ${ip}`,
        headers: headers, httpVersion,
    })
    log_proc.send(data, (err) => console.log(err))

    next()
}
module.exports = logger