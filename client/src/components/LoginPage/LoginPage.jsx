import { useState } from 'react'




export default function LoginPage({ allUsers }){
const [cred, setCred] = useState({
    username: "",
    password: ""
})

function handleChange(e){
    setCred({...cred, [e.target.name]: e.target.value })
}

function handleSubmit(e){
    e.preventDefault()
    if(allUsers.find(cred.username)){
        console.log("cred")
    } else {
        console.log( "failed cred")
    }
}

    return(
        <>
        <div className="homeDiv">

        <h1>Login Here</h1>
        <form className="form" onSubmit={handleSubmit}>
            <label>Username:</label>
            <input placeholder="username" onChange={handleChange} name="username"></input>
            <label>Password:</label>
            <input placeholder="password" onChange={handleChange} name="password"></input>
            <button onClick={handleSubmit}>Login</button>
        </form>
        </div>
       
        </>


    )
}