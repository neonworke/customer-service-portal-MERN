const mongoose = require('mongoose');
const purchasedItemsSchema = new mongoose.Schema({
    image: String,
    name: String,
    price: Number,
    desc: String,
    rating: Number,
    reviews: String,
},
    { collection: "purchasedItemsCollection" }
);

const model = mongoose.model('purchasedItemsModel', purchasedItemsSchema);
module.exports = model;