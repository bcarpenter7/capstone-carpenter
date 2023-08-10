import { useState } from 'react'

export default function UpdateProfile({ allUsers, handleCreateUser, setUser, user, handleEditUser, setEditMode }){
// const [accountExists, setAccountExist] = useState(false)
const [cred, setCred] = useState({
    username: user.username,
    password: user.password,
    friendsList: user.friendsList,
    img: user.img,
    firstName: user.firstName,
    lastName: user.lastName,
    posts: [],
    _id: user._id
})


function handleChange(e){
    setCred({...cred, [e.target.name]: e.target.value })
}


function handleSubmit(e){
    e.preventDefault()
    handleEditUser(cred)
    setEditMode(false)
}

    return (
        <>
        <div className="homeDiv">

        <h1>Update Profile Information</h1>
        <form className="form" onSubmit={handleSubmit}>
            <label>First Name</label>
            <input placeholder={user.firstName} onChange={handleChange} name="firstName"></input>
            <label>Last Name:</label>
            <input placeholder={user.lastName} onChange={handleChange} name="lastName"></input>
            <label>Profile Picture</label>
            <input placeholder={user.img} onChange={handleChange} name="img"></input>
            <button onClick={handleSubmit}>Login</button>

        </form>
        </div>
       
        </>


    )

}