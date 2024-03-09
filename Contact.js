const mongoose = require('mongoose');

const schema = mongoose.Schema({
    id: {type: String},
    name: { type: String},
    image: {type: String},
    phone: {type: String},
    email: { type: String},
    address: {type: String},
});

module.exports = mongoose.model("Contact", schema);