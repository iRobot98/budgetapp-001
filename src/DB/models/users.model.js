const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const User = model(
    "User",
    new Schema(
        {
            full_name: {
                type: {
                    first_name: { type: String, required: true },
                    middle_name: { type: String },
                    second_name: { type: String, required: true },
                },
            },
            user_name: { type: String, required: true },
            password: { type: String, select: false },
            phone_number: {
                type: [
                    {
                        type: String,
                        required: true,
                    },
                ],
            },
            id_number: {
                type: String,
                required: true,
            },
            country: {
                type: String,
                required: true,
            },
        },
        {
            timestamps: true,
        }
    )
);

module.exports = User;
