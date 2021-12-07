const express = require('express');
const router = express.Router();
const complaintModel = require("../models/complaintModel");

router.post("/addcomplaint", async function(req, res) {
    try {
        const additionResponse = await complaintModel.create(req.body);
        console.log("additionResponse", additionResponse);
        res.send({ results: "item added successfully" });
    } catch (e) {
        console.log("error occured in adding item", e);
    }
});

router.get('/getcomplaint', async function(req, res) {
    try {
        const complaintList = await complaintModel.find({}, { __v: 0 });
  res.send({ results: complaintList });
    } catch (e) {
        console.log("error in retrieving the item", e);
    }
});

router.delete("/deletecomplaint", async function(req, res) {
    try {
        await complaintModel.deleteOne({_id: req.body._id});
        res.send({ result: "Item deleted successfully" });
    } catch (err) {
        console.log("Error occured in deleting the item", err);
    }
})

module.exports = router;