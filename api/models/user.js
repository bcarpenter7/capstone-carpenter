const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new mongoose.Schema({
    username: {type:String, required: true},
    password: {type:String, required: true},
    friendsList: [{type:String}],
    img: {type:String},
    firstName: {type:String},
    lastName: {type: String},
    posts: [{type: Object}]
},
{
    timestamps: true,
}
)

const User = mongoose.model('User', userSchema)
module.exports = User