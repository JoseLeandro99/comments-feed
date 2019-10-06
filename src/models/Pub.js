const mongoose = require('../config/mongoose');

const PubSchema = mongoose.Schema({
    author: String,
    title: String,
    content: String,
    date: {
        type: Date,
        default: Date.now(),
    },
});

module.exports = mongoose.model('Pub', PubSchema);
