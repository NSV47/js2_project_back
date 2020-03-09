const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;
const schema = new Schema({
    from: ObjectId, // String is shorthand for {type: String}
    to: ObjectId,
    text: String,
});

module.exports = mongoose.model('Messages', schema);
