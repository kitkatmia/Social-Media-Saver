//local imports
import Login from './pages/login/Login';
import Source from './pages/Source';
import Loading from './pages/loading/Loading'
import app from './tools/Firebase';

import { useAuthState } from 'react-firebase-hooks/auth' //checks if user is logged in or not using a functin called useAuthState and returns an array with the user and the loading state as well as if an erorr has occured. All are boolean values
import { getAuth } from 'firebase/auth'; //fuction to set up instance of auth

const App = () => {

  const auth = getAuth(app); //creats an information object that contains the user data such as the displayName, email, uid
  const [user, loading, error] = useAuthState(auth); //useAuthState returns an array with the user and the loading state as well as if an erorr has occured. all are boolean values

  return (
    <>
    {/* <Loading /> */}
      {loading ? <Loading /> : error ? <center><h1>An error has occured! Refresh?</h1></center> : user ? <Source /> : <Login />}
      {/* <center><img src='https://flevix.com/wp-content/uploads/2019/07/Curve-Loading.gif' alt='loading icon'></img><p></p></center> */}
      {/* if loading show Loading... else if there is an error show error else if user not logged in log in */}
      {/* if a user is present allow them to access the source page otherwise allow them to login */}
    </>
  );
}

export default App;