
import './Post.css'
import '../../index.css'
import { useState } from 'react'
import PostDetail from '../PostDetail/PostDetail' 

export default function Post({
     posts, currentArticle, setCurrentArticle, handleDelete, handleEdit, setPage, user, handleEditUser, allUsers
    
    }) {
        console.log(allUsers.indexOf(e => e._id == posts[0].creatorId))
        console.log(allUsers.filter(e => e._id === posts[0].creatorId)[0].firstName, "fix")
        console.log(allUsers, posts, "everything")
        console.log(allUsers, "ALL USERS")
        console.log(posts[0].creatorId, "CREATOR ID")

    // const [currentArticle, setCurrentArticle] = useState("64c3e10928aa2fe7e8476947")
    const [temp, setTemp] = useState({
        username: user.username,
        password: user.password,
        friendsList: user.friendsList,
        img: user.img,
        firstName: user.firstName,
        lastName: user.lastName,
        posts: user.posts,
        _id: user._id
    })



    function handleChange(e){
        console.log(e.target.name)
        setCurrentArticle(e.target.name)
    }

    

    function handleAddFriend(e){
        console.log(temp.friendsList)
        temp.friendsList.push(e.target.name)
        console.log(temp, "TEMP")
        console.log(temp)
        console.log(user, "user")
        handleEditUser(temp)
        // setTemp({...temp, [temp.friendsList.p]: [...temp.friendsList, e.target.name]})
        console.log(temp.friendsList)
    }

    function handleRemoveFriend(e){
        const indexOfRemove = temp.friendsList.indexOf(e.target.name)
        temp.friendsList.splice(indexOfRemove, 1)
        handleEditUser(temp)
    }

    // const friendFeed = posts.filter((p) => user.friendsList.includes(String(p.creatorId)))

    if(currentArticle === null){
    return (
        <>
        <div className="homeDiv">
        <h1 className='title1'>Explore</h1>
        { posts.map((p, idx) => (

            <>
            <div className="blogCard">
                <div>
                    <img className="img" src={p.img} /> 
                </div>
                <div>
                      {/* Code below with allUsers, filters through users to pick the user responsible for the post so you can use their info*/}

                    <h4>{allUsers.filter(e => e._id === p.creatorId)[0].firstName} {allUsers.filter(e => e._id === p.creatorId)[0].lastName}  
                        <span className="date">{ 
                        p.updatedAt.slice(0, 10) ? p.createdAt.slice(0, 10) : p.updatedAt.slice(0, 10)
                        }</span>
                    </h4>
                    <h3 className="previewText">{p.content}</h3>
                    <button name={p._id} onClick={handleChange}>Click to View</button>
                        {/* user.friendsList.includes(String(p.creatorId)) */}
                     { temp.friendsList.includes(String(p.creatorId)) ? (
                        <button className="badBtn" name={p.creatorId} onClick={handleRemoveFriend}>Following</button>
                      ) : (
                        <button className="goodBtn" name={p.creatorId} onClick={handleAddFriend}>Follow</button>
                      )
                      }
                
                    
                    
                 
                   
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

