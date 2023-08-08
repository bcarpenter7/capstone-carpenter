const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new mongoose.Schema({
    content: {type:String, required: true},
    img: {type:String},
    likes: {type:Number},
    creatorId: {type: String}
},
{
    timestamps: true,
}
)

const Post = mongoose.model('Post', postSchema)
module.exports = Post