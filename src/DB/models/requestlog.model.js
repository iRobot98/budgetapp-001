const mongoose = require('mongoose');
const { stringify } = require('querystring');
const { Schema, model } = mongoose;

const RequestLog = model('RequestLog', new Schema(
    {
        time: { type: String, required: true },
        url_string: { type: String, required: true },
        headers: { type: Mixed, required: true },
        httpVersion: { type: String, required: true },
    }, {
    timestamps: true
}
));



module.exports = RequestLog;