import { useState } from 'react'
import "./LoginPage.css"



export default function LoginPage({ allUsers, setUser }){
const [cred, setCred] = useState({
    username: "",
    password: ""
})

function handleChange(e){
    setCred({...cred, [e.target.name]: e.target.value })
}

function handleSubmit(e){
    e.preventDefault()
    console.log(cred, allUsers[0].username)

    const exist = allUsers.filter(e => e.username === cred.username && e.password === cred.password)
    
    if(exist.length > 0){
        console.log("in the case which the credentials are correct")
        document.getElementById('errorMsg').style.opacity = 0;
        setUser(...exist)
        console.log(...exist)
    } else {
        console.log(false, exist)
        document.getElementById('errorMsg').style.opacity = 1;
    }
}

    return (
        <>
        <div className="homeDiv">

        <h1>Login Here</h1>
        <form className="form" onSubmit={handleSubmit}>
            <label>Username:</label>
            <input placeholder="username" onChange={handleChange} name="username"></input>
            <label>Password:</label>
            <input placeholder="password" onChange={handleChange} name="password"></input>
            <h1 id="errorMsg" className="hidden">Incorrect username or password</h1>
            <button onClick={handleSubmit}>Login</button>
        </form>
        </div>
       
        </>


    )
}