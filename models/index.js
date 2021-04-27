const mongoose = require("mongoose")

const VotesSchema = new mongoose.Schema({
    Poster:{
        type: String,
    },
    Title: {
        type: String
    },
    Year:{
        type: Number
    }

})

const Votes = mongoose.model("Votes", VotesSchema)

module.exports = Votes