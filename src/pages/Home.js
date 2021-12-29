import React from "react";
import classes from "./pages.module.css";
import { useSelector } from "react-redux";

const Home = () => {
  const userInfo = useSelector((state) => state.auth.userInfo);
  return (
    <>
      <div className={classes.home}>
        <div><h2>Profile</h2></div>
        <div className={classes.user}><div><h3>1. {userInfo.displayName}</h3></div><div><img src={userInfo.photoURL} alt="user" /></div></div>
        <div className={classes.user}><div><h3>2. Email</h3></div><div>{userInfo.email}</div></div>
        <div className={classes.user}><div><h3>3. Phone</h3></div><div>None</div></div>
        <div className={classes.user}><div><h3>4. providerId</h3></div><div>{userInfo.providerId}</div></div>
        <div className={classes.user}><div><h3>8. uid</h3></div><div>{userInfo.uid}</div></div>
      </div>
    </>
  );
};

export default Home;
