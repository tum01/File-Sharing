require('dotenv').config();
const { connect } = require('mongo');
const mongoose = require('mongoose');

function connectDB() {
    mongoose.connect(process.env.URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Hey MongoDB'))
  .catch(err => console.log("OOps!", err));


}

module.exports = connectDB;