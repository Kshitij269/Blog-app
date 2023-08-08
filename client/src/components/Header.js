import {Link} from "react-router-dom"
import { useContext, useEffect} from "react";
import { UserContext } from "../context/UserContext";

function Header() {
  const {userInfo,setUserInfo}=useContext(UserContext);
  useEffect(()=>{
    fetch('http://localhost:4000/profile',{
      credentials:'include',
    }).then(response=>{
      response.json().then(userInfo=>{
        setUserInfo(userInfo);
      })      
    })
  },[]);

  function logout(){
    fetch('http://localhost:4000/logout',{
      credentials:'include',
      method:"POST"
    })
    setUserInfo([]);
  }
  const username = userInfo.username;
  return (
    <header className="mb-5 p-3 flex justify-between mx-auto bg-blue-600">
      <Link to="/" className="logo border-2 p-1 rounded-lg ">
        My Blog
      </Link>
      <nav className="flex gap-4">
        {console.log({username})}
        {
          username && (
          <>
            <div className="text-2xl  translate-y-1 text-blue-900 font-bold">{username}</div>
            <div className="text-xl  border-2 p-1 rounded-lg "><Link to="/create">Create New Post </Link></div>
            <div className="text-xl  border-2 p-1 rounded-lg" ><button onClick={logout}>Logout</button></div>
          </>
          )
        }
        {
          (!username)&&(
          <>
            <div className="text-xl  border-2 p-1 rounded-lg "><Link to="/login">Login</Link></div>
            <div className="text-xl  border-2 p-1 rounded-lg "><Link to="/register">Register</Link></div>
          </>)
        }
        
      </nav>
    </header>
  );
}
export default Header;