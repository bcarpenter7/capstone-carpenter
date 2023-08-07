import { useState } from 'react'
import "./RegisterPage.css"



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
    const exist = allUsers.filter(e => e.username === cred.username)
    
    if(exist.length > 0){
        console.log("username is NOT unique, rendering error msg")
        document.getElementById('errorMsgTwo').style.opacity = 1;
    } else {
        console.log("username is unique, creating a new account")
        handleCreateUser(cred)
        document.getElementById('errorMsgTwo').style.opacity = 0;
    }
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
            <h1 id="errorMsgTwo" className="hidden">An account already exists with this username.</h1>
            <button onClick={handleSubmit}>Login</button>
        </form>
        </div>
       
        </>


    )
}