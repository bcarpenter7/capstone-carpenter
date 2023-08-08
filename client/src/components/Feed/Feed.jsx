
import '../../components/Post/Post.css'
import '../../index.css'
import { useState } from 'react'
import PostDetail from '../PostDetail/PostDetail' 

export default function Feed({ posts, currentArticle, setCurrentArticle, handleDelete, handleEdit, setPage, user, handleEditUser}) {
    // const [currentArticle, setCurrentArticle] = useState("64c3e10928aa2fe7e8476947")
    const [temp, setTemp] = useState({
        username: user.username,
        password: user.password,
        friendsList: user.friendsList,
        img: user.img,
        firstName: user.firstName,
        lastName: user.lastName,
        posts: user.posts
    })



    function handleChange(e){
        console.log(e.target.name)
        setCurrentArticle(e.target.name)
    }
    // const friendFeed = posts.map((p) => user.friendList.includes(p._id))


    function handleAddFriend(e){
        console.log(temp.friendsList, "friendsList")
        temp.friendsList.push(e.target.name)
        // setTemp({...temp, [temp.friendsList.p]: [...temp.friendsList, e.target.name]})
        console.log(temp.friendsList)
    }
    console.log(temp.friendsList, "friendsList")
    const friendFeed = posts.filter((p) => user.friendsList.includes(String(p.creatorId)))
    console.log(user.friendsList, user.friendsList.includes(Number(posts[0].creatorId)), posts[0].creatorId, 'test')
    console.log(friendFeed, "FRIEND FEED")
    if(currentArticle === null){
    return (
        <>
        <div className="homeDiv">
        <h1 className='title1'>Newsfeed</h1>
        { friendFeed.map((p, idx) => (

            <>
            <div className="blogCard">
                <div>
                    <img className="img" src={p.img} /> 
                </div>
                <div>
                    <h4>{p.author}  <span className="date">{
               
                    // p.updatedAt.slice(0, 10) ? p.createdAt.slice(0, 10) : p.updatedAt.slice(0, 10)
                    
                    }</span></h4>
                    <h1>{p.title}</h1>
                    {/* <h3 className="previewText">{p.content.slice(0, p.content.indexOf('.') + 1)}</h3> */}
                    <button name={p._id} onClick={handleChange}>Click to Read More</button>
                    <button name={p.creatorId} onClick={handleAddFriend}>Add Friend</button>
                 
                   
                </div>
               
            </div>

            </>
    ))}
    </div>
       </>
    )
        } else {
            const article = posts.find(p => p._id == currentArticle)
            return (
            <>      
               <PostDetail article={article} handleEdit={handleEdit} setPage={setPage} handleDelete={handleDelete} setCurrentArticle={setCurrentArticle} />
            </>
            )
        }
}

