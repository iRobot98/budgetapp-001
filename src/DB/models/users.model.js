const mongoose = require('mongoose');
const { stringify } = require('querystring');
const { Schema, model } = mongoose;

const userSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, select: false, },
    phoneNumber: {
        type: stringify,
        required: true,
    }
});

const User = model('User', userSchema);

module.exports = User;