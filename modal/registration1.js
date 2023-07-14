const mongoose = require('mongoose');

const addregistrations = new mongoose.Schema({
        gmail : { type : String},
        passwords : { type : String}
  })

  const resgistration = mongoose.model('moneymarket' , addregistrations);

  module.exports = resgistration;
