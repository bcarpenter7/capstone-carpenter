const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new mongoose.Schema({
    username: {type:String, required: true},
    password: {type:String, required: true},
    friends: {type:String},
    img: {type:String},
    firstName: {type:String},
    lastName: {type: String},
},
{
    timestamps: true,
}
)

const User = mongoose.model('User', userSchema)
module.exports = User