const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI);

        console.log(`Mongo Connected: ${connect.connection.host}`.cyan.underline);
    } catch (error) {
        console.log(error); // Log the error
        process.exit(1); // Then close the process with failuers, pass in a 1
    }  
}

module.exports = connectDB;