const { parentPort } = require("worker_threads");
const { wait_loop } = require("./../utils")

const { write_to_log } = require("./utilities");
const RequestLog = require("../DB/models/requestlog.model");
require("./../DB/connect_To_mongodb")()
wait_loop()

process.on("message", (msg) => {
    write_to_log("request_log", msg)
    console.log(msg)
})