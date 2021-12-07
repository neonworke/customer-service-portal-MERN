const mongoose = require('mongoose');
const feedbackItemsSchema = new mongoose.Schema({
    name: String,
    feedback: String
},
    { collection: "feedbackItemsCollection" }
);

const model = mongoose.model('feedbackItemsModel', feedbackItemsSchema);
module.exports = model;