
const fs = require("fs")
const { log_dir } = require("../../settings")
const { pino } = require("pino")

// const write_to_log = (name, text) => {
//     fs.writeFileSync(`${log_dir}/${name}.txt`, text + '\n', {
//         flag: "a+", encoding: "utf8"
//     })
// }


const logger = require('pino-http')({
    level: process.env.LOG_LEVEL ? process.env.LOG_LEVEL : 'silent',
    timestamp: pino.stdTimeFunctions.isoTime,
    // transport: {
    //     target: 'pino-http-print', // use the pino-http-print transport and its formatting output
    //     options: {
    //         destination: 1,
    //         all: true,
    //         translateTime: true
    //     }
    // }
})

module.exports = logger