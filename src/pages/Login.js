import React from "react";
import classes from "./pages.module.css";
import { auth, provider } from "../firabase.config";
import { signInWithPopup } from "firebase/auth";
import { useFetching } from "../hook/useFetching";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import GoogleButton from 'react-google-button'

const Login = () => {
  const [ loading] = useAuthState(auth);
  const navigate = useNavigate()
  const [getGoogleFetching] = useFetching(
    async () => {
      await signInWithPopup(auth, provider)
        .then(async (result) => {
          if(result){
            navigate("/")
            localStorage.setItem("isAuth", true)
          }
        })
        .catch((error) => console.log("Google Error1", error));
    }
  );

  if (loading)
    return (
      <div className={classes.login}>
        <div className={classes.signin}></div>
      </div>
    );

  return (
    <div className={classes.login}>
      <div className={classes.signin}>
        <p>Sign in with Google</p>
        <GoogleButton style={{marginTop:'15px'}} onClick={getGoogleFetching}>Sign In</GoogleButton>
      </div>
    </div>
  );
};
export default Login;