const mongoose = require("mongoose");
const logger = require("../log");
const { wait } = require("../utils");
const { dbName } = require("../../settings");

mongoose.set('strictQuery', false);
async function connectToDatabase() {
    let success = false
    let attempts = 0;
    while (!success) {
        try {
            const user = "budgetapp-admin-001" //process.env.DB_USER;
            const password = "VdoVO1AuzTHC7ob2"// process.env.DB_PASS;

            const connectionString = `mongodb+srv://${user}:${password}@olivineschool000.jerpqjx.mongodb.net/${dbName}?retryWrites=true&w=majority`;
            console.log(`mongoDB connection string: ${connectionString}`)
            await mongoose.connect(connectionString, {
                serverSelectionTimeoutMS: 5000,
                useNewUrlParser: true,
            }).then(() => {
                console.log('Connected to database');
            })
            return
        } catch (e) {
            console.log(`connection attempts: ${attempts++}`)
            console.error(e);
            await wait(attempts)
            if (attempts > 4) {
                process.exit(1)
            }
        }
    }
}

module.exports = connectToDatabase;