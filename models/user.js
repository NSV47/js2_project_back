const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const schema = new Schema({
    username:  String, // String is shorthand for {type: String}
    password: String
});

// const News = mongoose.model('News', newsSchema);

module.exports = mongoose.model('Users', schema);
