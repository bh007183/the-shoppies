const mongoose = require("mongoose")

const VotesSchema = new mongoose.Schema({
    image:{
        type: String,
    },
    title: {
        type: String
    },
    year:{
        type: Number
    }

})

const Votes = mongoose.model("Votes", VotesSchema)

module.exports = Votes