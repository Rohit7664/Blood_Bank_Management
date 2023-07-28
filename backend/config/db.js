const mongoose = require('mongoose');
const colors = require('colors');



const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connected to MongoDB ${mongoose.connection.host}`.bgBlue.green)
    } catch (error) {
        console.log(`MongoDB error ${error}`.bgBlack.white)
        
    }
}

module.exports = connectDB;