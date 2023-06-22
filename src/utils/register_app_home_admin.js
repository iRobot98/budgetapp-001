
const fs = require("fs")
const { registered_urls } = require("../../settings")
const { splitUrl } = require("./001")

const fetch_app = (req, res, callNext) => {
    const { originalUrl } = req
    const split_ = splitUrl(originalUrl)

    if (registered_urls.app.includes(split_.last) && split_.split[0] == '') {
        res.type("html")
        res.setTimeout(100 * 60 * 60 * 24)
        res.send(fs.readFileSync("./views/app/build/index.html"))
        return
    }
    callNext()
}

const fetch_landing = (req, res) => {
    res.type("html")
    res.setTimeout(100 * 60 * 60 * 24)
    res.send(fs.readFileSync("./views/website/index.html"))
}

module.exports = {
    fetch_landing,
    fetch_app
}