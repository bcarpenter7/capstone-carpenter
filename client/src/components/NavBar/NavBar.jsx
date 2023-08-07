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
        <div className="navDiv">
            <div className="homeBtnDiv">
                <button name="null" onClick={handleChange}>Home</button>
            </div>
            <div className="buttonDiv">
                <button name="index" onClick={handleChange}>See All Articles</button>
                &nbsp; | &nbsp;
                <button name="postform" onClick={handleChange}>Add Article</button>
                <button onClick={handleLogout}>
                Logout, {user.username}
                </button>
            </div>
        </div>
    )
}