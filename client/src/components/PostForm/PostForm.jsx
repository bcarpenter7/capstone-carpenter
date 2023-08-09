import { useState } from 'react'
import '../../index.css'
import './PostForm.css'


export default function PostForm({ handleCreate, setPage, user }){
    const [tempPost, setTempPost] = useState({
        content: '',
        likes: 0,
        img: '',
        creatorId: user._id
    })

    function handleChange(e){
        setTempPost({...tempPost, [e.target.name]: e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault()
        setPage('index')
        handleCreate(tempPost)
    }

    return(
        <>
            <div className="addDiv">
            <h1 className="articleHeader">Create Post</h1>
            <form className="form" onSubmit={handleSubmit}>
                <div>
                    <label>Enter Content</label>
                    <textarea 
                    className="textArea"
                    value={tempPost.content} 
                    name="content"
                    onChange={e => handleChange(e)}
                    />

                </div>
               
                <div>
                    <label>Enter Img Url</label>
                    < br/>
                    < br/>
                    <input 
                    value={tempPost.img} 
                    name="img"
                    onChange={e => handleChange(e)}
                    />

                </div>
               
                <button type="submit">Enter</button>
            </form>

            </div>
            
        </>


    )
}