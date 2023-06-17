const fs = require("fs")
const { log_dir } = require("../../settings")

const write_to_log = (name, text) => {
    fs.writeFileSync(`${log_dir}/${name}.txt`, text + '\n', {
        flag: "a+", encoding: "utf8"
    })
}