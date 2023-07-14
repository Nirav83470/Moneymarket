const mongoose = require('mongoose');

const ab = new mongoose.Schema({
    client_name: { type : String},
    currency_name: { type : String},
    qty: { type : Number},
    price : { type : Number},
})

const addmoney = mongoose.model('currency', ab);

module.exports = {
    addmoney
}