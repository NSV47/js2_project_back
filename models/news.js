const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const schema = new Schema({
    title:  String, // String is shorthand for {type: String}
    text: String,
    img:   String,
});

// const News = mongoose.model('News', newsSchema);

module.exports = mongoose.model('News', schema);
