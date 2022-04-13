const mongoose = require('mongoose')

const connectDB = (url) => {
  mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    console.log('Successfully connected to database');
  }).catch((error) => {
    console.error(error);
  })
}

module.exports = connectDB