require("./src/process.handlers")
const express = require('express')
const app = express()
const fs = require("fs")
const favicon = require('serve-favicon')
const path = require('path')
const port =  5000


app.use("*",require("./src"))
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

app.get("/*",require("./src/router_import"))
app.get("/",(req,res)=>{
    res.type("html")
    res.setTimeout(100*60*60*24)
    res.send(fs.readFileSync("./views/app/build/index.html"))
})

app.get("/",express.static("views"))

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
