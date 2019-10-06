const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://main:oPj0GlWepbNlwqGr@apps-rsqn4.mongodb.net/commentsFeed?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = mongoose;