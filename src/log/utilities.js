const fs = require("fs")
const { log_dir } = require("../../settings")

const { pino } = require("pino")
const { GeneralLog, RequestLog } = require("../DB/models/logs.model")

const write_to_log = (name, text) => {
    fs.writeFileSync(`${log_dir}/${name}_log.txt`, text + '\n', {
        flag: "a+", encoding: "utf8"
    })
}

let general_logs = []
const general_log = async (...texts) => {
    const date = new Date().toUTCString()
    const txt = texts.join("\n")
    const c_txt = `${date}:  ${txt}`
    console.log(c_txt);
    write_to_log("general", c_txt)
    general_logs.push({
        time: Date.now(), log_entry: txt,
    })
    return txt

};


setInterval(() => {

    if (general_logs.length) {
        GeneralLog.insertMany(general_logs)
            .catch((v) => {
                console.log(v)
            })
            .finally(() => {
                general_logs = []
            })
    }
}, 10000)


let request_logs = []
const request_log = async (data = {
    time: 0,
    url_string: ` `,
    headers: {}, httpVersion: ` `,
}) => {
    const c_txt = JSON.stringify(data)
    write_to_log("request", c_txt)
    request_logs.push(data)
    return c_txt

};


setInterval(() => {
    // while (request_logs.length > 0) {
    //     RequestLog.create(request_logs.pop())
    // }
    if (request_logs.length) {
        RequestLog.insertMany(request_logs)
            .catch((v) => {
                console.log(v)
            })
            .finally(() => {
                request_logs = []
            })
    }
}, 10000)




module.exports = {
    write_to_log,
    general_log,
    request_log,
}