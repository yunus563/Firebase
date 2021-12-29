import React from 'react'
import classes from './component.module.css'
import { Link } from "react-router-dom";
import { auth } from "../firabase.config";
import { signOut } from 'firebase/auth'
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
const Navbar = () => {
  const navigate = useNavigate()
  
  const [user] = useAuthState(auth);
    function logout(){
    navigate("/login")
    signOut(auth)
    localStorage.removeItem("isAuth")
  }
  return (
    <>
      <div className={classes.navbar}>
        <div>
          <span><Link to="/"><a>Profile</a></Link></span>
          <span><Link to="/create"><a>Comments</a></Link></span>
        </div>
        <div>
          {user ? <span onClick={logout} style={{cursor:'pointer'}}><a>Log out</a></span> : ""}
        </div>
      </div>
    </>
  )
}

export default Navbar
