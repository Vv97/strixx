const { mongoose, model } = require("mongoose")
require("dotenv").config();


const mongoConnect = async () => {
    try {
        await mongoose.connect(process.env.mongodbUrl);
        console.log("database is connected")
    } catch (error) {
        console.log(error)
    }
}


module.exports = mongoConnect;