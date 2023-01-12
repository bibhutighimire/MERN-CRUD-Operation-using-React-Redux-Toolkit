const mongoose = require('mongoose')

const connectDb = async (req, res) => {
    try {
        mongoose.set('strictQuery', true)
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log('Connected to Mongo DB')
    } catch (error) {
        console.log('Unable to connect to Mongo DB')
    }
}
module.exports = connectDb