require("./src/process.handlers")
const express = require('express')
const app = express()
const favicon = require('serve-favicon')
const path = require('path')
const { fetch_app, fetch_landing } = require("./src/utils/register_app_home_admin")
const port = process.env.PORT ? process.env.PORT : 5000


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("*", require("./src"))

app.use("/api",require("./src/api"))

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

// REGISTER APP URLS
app.get("/*", require("./src/router_import"), fetch_app)

app.get("/", fetch_landing)


app.get("/", express.static("views"))

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})


