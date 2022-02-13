const mongoose = require('mongoose')
const MONGO_URL = process.env.MONGO_URL

async function mongoConnect() {
  try {
    await mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log("connected to mongodb")
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  mongoConnect,
}