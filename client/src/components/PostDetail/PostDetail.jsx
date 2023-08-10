
import { useState } from 'react'
import EditPage from '../../EditPage/EditPage'
import './PostDetail.css'


export default function PostDetail({article, handleEdit, setPage, deletePost, handleDelete, setCurrentArticle, user}){
    console.log(article.content)
    
    
    console.log(user, "user")
    console.log(article, "article")

    const [editMode, setEditMode] = useState(false)

    function editPost(e){
        setEditMode(true)
    }

    function deletePost(e){
        if (window.confirm("Are you sure you want to delete this post?")) {
            handleDelete(e.target.name);
            setCurrentArticle(null)
            setEditMode(false)
            setPage("index")
          }
    }


    if(editMode === true){
    return (
        <EditPage article={article} handleEdit={handleEdit} setPage={setPage} setEditMode={setEditMode} setCurrentArticle={setCurrentArticle}/>
    ) 
    } else if(user._id === article.creatorId){
        return (
            <>
            
                
                <div className="p-8 bg-slate-200 rounded mx-auto mt-20 max-w-[80vmin] px-4 md:px-8 2xl:px-16 md:w-full lg:w-3/5 2xl:w-4/6 flex h-full ltr:md:ml-7 rtl:md:mr-7 flex-col ltr:lg:pl-7 rtl:lg:pr-7">
                    <div>
                    <h1 className="text-2xl 2xl:text-3xl font-bold text-heading mb-10"> {article.title} </h1>
                    </div>
                    <h3 className="block text-gray-600 font-semibold text-sm leading-none mb-3"> {article.author} </h3>
                    <h3 className="block text-gray-600 font-semibold text-sm leading-none mb-3"> Published { article.updatedAt.slice(0, 10) ? article.createdAt.slice(0, 10) : article.updatedAt.slice(0, 10)}</h3>
                    
                    <div>
                        <img className="max-w-[20vmin]" src={article.img} /> 
                    </div>
                    <div>
                        <br />
                        <br />
                        <p className="articleText">{article.content}</p>

                        <button name={article._id} onClick={editPost}> Click to edit</button>
                        <button name={article._id} onClick={deletePost}>Click to delete</button>
                      
                        <br />
                        <br />
                    </div>
                </div>
    
            </>
    
        )
    }
    
    
    else {
        return (
            <>
            
                
                <div className="container">
                    <div>
                    <h1 className="titleDetail"> {article.title} </h1>
                    </div>
                    <h3 className="authorName"> {article.author} </h3>
                    <h3 className="authorCreated"> Published { article.updatedAt.slice(0, 10) ? article.createdAt.slice(0, 10) : article.updatedAt.slice(0, 10)}</h3>
                    
                    <div>
                        <img className="imgDetail" src={article.img} /> 
                    </div>
                    <div>
                        <br />
                        <br />
                        <p className="articleText">{article.content}</p>
                        <br />
                        <br />
                    </div>
                </div>
    
            </>
    
        )
    }
}