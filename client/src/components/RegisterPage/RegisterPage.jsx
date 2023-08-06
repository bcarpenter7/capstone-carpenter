import { useState } from 'react'




export default function RegisterPage({ allUsers, handleCreateUser }){
const [cred, setCred] = useState({
    username: "",
    password: "",
    friends: "",
    img: "",
    firstName: "",
    lastName: ""
})

function handleChange(e){
    setCred({...cred, [e.target.name]: e.target.value })
}

function handleSubmit(e){
    e.preventDefault()
    handleCreateUser(cred)
    console.log(allUsers, cred)
}

    return(
        <>
        <div className="homeDiv">

        <h1>Register Here</h1>
        <form className="form" onSubmit={handleSubmit}>
            <label>Username:</label>
            <input placeholder="username" onChange={handleChange} name="username"></input>
            <label>Password:</label>
            <input placeholder="password" onChange={handleChange} name="password"></input>
            <label>First Name</label>
            <input placeholder="password" onChange={handleChange} name="firstName"></input>
            <label>Last Name:</label>
            <input placeholder="password" onChange={handleChange} name="lastName"></input>
            <button onClick={handleSubmit}>Login</button>
        </form>
        </div>
       
        </>


    )
}