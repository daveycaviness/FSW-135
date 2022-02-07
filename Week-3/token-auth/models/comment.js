const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema({
    userComment: {
        type: String,
        required: true
    },
    userID:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Comment", commentSchema)