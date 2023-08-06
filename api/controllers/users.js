


const User = require('../models/user')

module.exports = {
    index,
    create,
    show,
    deleteUser,
    edit
}


async function index(req, res){
    try {
        const allUsers = await User.find({})
        // Sending json data of allUsers
        res.status(200).json(allUsers)
    } catch(err){
        console.log(err)
    }
}

async function show(req, res){
    try {
        const showUser = await User.findById(req.params.id)
        res.status(200).json(showUser)
    } catch(err){
        console.log(err)
    }
}

async function deleteUser(req, res){
    try {
        const deleteUser = await User.findByIdAndDelete(req.params.id)
        res.status(200).json(deleteUser)
    } catch(err){
        console.log(err)
    }
}

async function create(req, res){
    try {
        const user = await User.create(req.body)
        res.status(200).json(user)
    } catch(err){
        console.log(err)
    }
}

async function edit(req, res){
    try {
        const editAfterUser = req.body
        await User.findByIdAndUpdate(req.params.id, editAfterUser)
        res.status(200).json(editAfterUser)
    } catch(err){
        console.log(err)
    }

}