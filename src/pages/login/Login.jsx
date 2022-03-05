import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import './login.css'

const Login = ()=>{

    const auth = getAuth();

    const provider = new GoogleAuthProvider();

    const handleLogin = () =>{
        signInWithPopup(auth, provider)
    }

    return(
    <>
        <button onClick = {handleLogin}>Login with Google</button>
    </>
    )
}

export default Login;