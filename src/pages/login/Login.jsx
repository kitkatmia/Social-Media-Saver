import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
//tools probided to sign in with google given by firebase
import './login.css'
//the login page includes a google sign in button and a way to connect auth
const Login = ()=>{

    const auth = getAuth();
    //create instance and reference auth

    const provider = new GoogleAuthProvider();
    //create instance and reference provider in this case we are using google sign in

    const handleLogin = () =>{
        signInWithPopup(auth, provider) //sign in with google using the pop-up method (ashwins favorite)
    }

    return(
    <>
        <button onClick = {handleLogin}>Login with Google</button> 
        {/* button that will sign in with google on click*/}
    </>
    )
}

export default Login;