const Votes = require("../models")
const router = require("express").Router()
const mongojs = require("mongojs")

router.get("/api/get", async (req, res) => {
    const data = await Votes.find().catch(err => res.json(err))
    res.json(data)
})
router.delete("/api/delete/:_id", async (req, res) => {
    const data = await Votes.deleteOne({_id: mongojs.ObjectID(req.params._id)}, req.body).catch(err => res.json(err))
    res.json(data)
})
router.post("/api/add", async (req, res) => {
    const data = await Votes.create(req.body).catch(err => res.json(err))
    res.json(data)
})


module.exports = router

