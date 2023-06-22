require("./src/process.handlers")
const express = require('express')
const app = express()
const fs = require("fs")
const favicon = require('serve-favicon')
const path = require('path')
const { registered_urls } = require("./settings")
const { splitUrl } = require("./src/utils/001")
const logger = require("./src/log")
const port = process.env.PORT ? process.env.PORT : 5000


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("*", require("./src"))
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

// REGISTER APP URLS
app.get("/*", require("./src/router_import"), (req, res, callNext) => {
    const { originalUrl } = req
    const split_ = splitUrl(originalUrl)

    if (registered_urls.app.includes(split_.last) && split_.split[0] == '') {
        res.type("html")
        res.setTimeout(100 * 60 * 60 * 24)
        res.send(fs.readFileSync("./views/app/build/index.html"))
        return
    }
    callNext()
})
app.get("/", (req, res) => {
    res.type("html")
    res.setTimeout(100 * 60 * 60 * 24)
    res.send(fs.readFileSync("./views/website/index.html"))
})

app.get("/", express.static("views"))

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})


