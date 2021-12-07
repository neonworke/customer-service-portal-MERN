const mongoose = require('mongoose');
const complaintSchema = new mongoose.Schema({
    subject: String,
    productName: String,
    complaint: String

},
    { collection: "complaintCollection" }
);

const model = mongoose.model('complaintModel', complaintSchema);
module.exports = model;