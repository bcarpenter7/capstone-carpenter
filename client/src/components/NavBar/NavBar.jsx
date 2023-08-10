import './NavBar.css'

export default function NavBar({ setPage, setCurrentArticle, user, setUser }){

   function handleChange(e){
        setCurrentArticle(null)
        setPage(e.target.name)
    }

    function handleLogout(){
        setUser(false)
    }

    return (
        <div className="flex bg-slate-950 font-sans">
            <div className="homeBtnDiv p-8">
                <button className="text-blue-500 hover:text-blue-800 mr-6 font-sans"
                 name="null" onClick={handleChange}>Home</button>
            </div>
            <div className="buttonDiv">
                <button name="index" onClick={handleChange} className="text-blue-500 hover:text-blue-800 mr-6" >Explore Page</button>
                &nbsp; | &nbsp;
                <button name="postform" onClick={handleChange} className="text-blue-500 hover:text-blue-800 mr-6" >Make Post</button>
                <button name="feed" onClick={handleChange} className="text-blue-500 hover:text-blue-800 mr-6" >Newsfeed</button>
                <button onClick={handleLogout} className="text-blue-500 hover:text-blue-800 mr-6">
                Logout, {user.username}
                </button>
            </div>
        </div>
    )
}