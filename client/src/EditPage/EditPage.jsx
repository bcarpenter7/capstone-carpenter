import { useState } from 'react'


export default function EditPost({ article, handleEdit, setPage, setEditMode}){
    
    const [tempPost, setTempPost] = useState({
        content: article.content,
        img: article.img,
        likes: article.likes,
        _id: article._id,
        createdAt : article.createdAt,
        updatedAt : article.updatedAt,
        creatorId : article.creatorId
    })
   
    function handleChange(e){
        setTempPost({...tempPost, [e.target.name]: e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault()
        console.log(tempPost)
        setEditMode(false)
        setPage("index")
        handleEdit(tempPost)
        
    }

    return(
        <>
            <div className="p-8 bg-slate-200 rounded mx-auto mt-200 max-w-[80vmin] px-4 md:px-8 2xl:px-16 md:w-full lg:w-3/5 2xl:w-4/6 flex h-full ltr:md:ml-7 rtl:md:mr-7 flex-col ltr:lg:pl-7 rtl:lg:pr-7">
            <h4 class="text-2xl 2xl:text-3xl font-bold text-heading mb-10">
              Edit Post
            </h4>
            <form className="w-full mx-auto flex flex-col justify-center" onSubmit={handleSubmit}>
              
                <div>
                    <label className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer"
                    >Enter Content</label>
                    <textarea
                    value={tempPost.content} 
                    className="textArea mb-3 py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12" 
                    name="content"
                    onChange={e => handleChange(e)}
                    />

                </div>
               
                <div>
                    <label className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer"
                    >Enter Img Url</label>
                    <input 
                    value={tempPost.img} 
                    name="img"
                    onChange={e => handleChange(e)}
                    className="mb-3 py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12" 
                    />

                </div>
               
                <button className="text-[13px] md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-body text-center justify-center border-0 border-transparent placeholder-white focus-visible:outline-none focus:outline-none  bg-black text-white px-5 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-gray-600 hover:shadow-cart h-12 lg:h-14 mt-1 text-sm lg:text-base w-full sm:w-auto"
                type="submit">Enter</button>
            </form>

            </div>
            
        </>


    )
}