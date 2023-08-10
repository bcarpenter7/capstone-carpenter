import { useState } from 'react';
import './HomePage.css';
import '../../index.css';
import UpdateProfile from '../../UpdateProfile/UpdateProfile'

export default function HomePage({ setPage, user, posts, setCurrentArticle, handleEditUser}) {
  const [nav, setNav] = useState({});
  const [editMode, setEditMode] = useState(false)
  console.log(user)
  function handleClick(e) {
    setPage(e.target.name);
  }

  const newsData = ['bennett', 'cat']

  let picture = ""

  if(user.img === ""){
    picture = "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60"
  } else {
    picture = user.img
  }

  const userPosts = posts.filter(p => p.creatorId === user._id)


  function handleChange(e){
    console.log(e.target.name)
    setCurrentArticle(e.target.name)
    setPage("index")
}

function handleEdit(e){
setEditMode(true)
}

if(!editMode){

  return (
    <>
      <div className="homeDiv">
        <div className="nameDiv">
          <img className="profilePicture" src={picture}></img>
          <h1 className="userName">{user.firstName} {user.lastName}</h1>
        </div>
        <button className="editBtn" name={user._id} onClick={handleEdit}>Edit Profile</button>
        <h3 className="second">Welcome to your profile page</h3>
        
        <div>
        { userPosts.map((p, idx) => (

                <>
                <div className="blogCard">
                    <div>
                        <img className="img" src={p.img} /> 
                    </div>
                    <div>
                        <h4>{p.author}  <span className="date">{
                  
                        p.updatedAt.slice(0, 10) ? p.createdAt.slice(0, 10) : p.updatedAt.slice(0, 10)
                        
                        }</span></h4>
                        <h1>{p.title}</h1>
                        <h3 className="previewText">{p.content.slice(0, p.content.indexOf('.') + 1)}</h3>
                        <button name={p._id} onClick={handleChange}>Click to Read More</button>
                        
                    
                      
                    </div>
                  
                </div>

                </>
                ))}
        </div>
      </div>
  
    </>
  );
    } else if(editMode) {
      return (<UpdateProfile user={user} handleEditUser={handleEditUser} setEditMode={setEditMode}/>)
    }
}
