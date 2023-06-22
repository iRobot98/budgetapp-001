const fs = require("fs")
const { log_dir } = require("../../settings")

const { pino } = require("pino")

const write_to_log = (name, text) => {
    fs.writeFileSync(`${log_dir}/${name}.txt`, text + '\n', {
        flag: "a+", encoding: "utf8"
    })
}



module.exports = {
    write_to_log
}