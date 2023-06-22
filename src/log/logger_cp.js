const { parentPort } = require("worker_threads");
const { wait_loop } = require("./../utils")

wait_loop()
process.on("message", (msg) => {
    console.log(msg)
})