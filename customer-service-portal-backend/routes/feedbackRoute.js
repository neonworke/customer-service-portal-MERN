const express = require('express');
const router = express.Router();
const feedbackModel = require("../models/feedbackModel");

router.post("/addreviews", async function(req, res) {
    try {
        const additionResponse = await feedbackModel.create(req.body);
        console.log("additionResponse", additionResponse);
        res.send({ results: "item added successfully" });
    } catch (e) {
        console.log("error occured in adding item", e);
    }
});

router.get("/getreviews", async function (req, res) {
    console.log("name", req.query.name);
    try {
        const feedbackItemsList = await feedbackModel.find({
            name: req.query.name
        }, { __v: 0 });
  res.send({ results: feedbackItemsList });
    } catch (e) {
        console.log("error in retrieving the item", e);
    }
})


module.exports = router;