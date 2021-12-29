import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Create from "./pages/Create";
import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import { auth } from "./firabase.config";
import { useAuthState } from "react-firebase-hooks/auth";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {getUsers} from './ReduxToolkit/isAuth'
import { useSelector, useDispatch } from "react-redux";


function App() {

  const userInfo = useSelector((state) => state.auth.userInfo)
  const dispatch = useDispatch()

  const [user, loading] = useAuthState(auth);
  useEffect(() => {
   if(!user){
     localStorage.removeItem("isAuth")
     dispatch(getUsers(""))
   }
   else{
    dispatch(getUsers(user))
    localStorage.setItem("isAuth", true)
   }
  }, [user]);


  if (loading) return <p>Loading...</p>;
  return (
    <Router>
        <Navbar />
        <div className="App">
          {user ? (
            <Routes>
              <Route path="/" exact={true} element={<Home />} />
              <Route path="/*" exact={true} element={<Home />} />
              <Route path="/create" element={<Create user={user} />} />
            </Routes>
          ) : (
            <Routes>
              <Route path="*" element={<Login />} />
            </Routes>
          )}
        </div>
      </Router>
  );
}

export default App;
