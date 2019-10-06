const mongoose = require('mongoose');

mongoose.connect('localhost', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = mongoose;