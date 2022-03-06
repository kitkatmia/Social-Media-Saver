import './home.css'
import {Link} from 'react-router-dom'
//loads the home page
const Home = ()=>{
    return(
        <>
            {/* center the page */}
            <center> 
                <h1>Welcome to Social Media Savior</h1>
                <button><Link to = 'post'>Post Something New</Link></button>
                {/* Link is a component provided which changes to route effectiently. It is not relative but absolute. Even if ur route is 
                ashwintalwalkar.com/a/b/c/d and the link's to prop is post, onclick ur url will be ashwintalwalkar.com/post*/}
                <br/>
                <br/>
                <button><Link to = 'feed'>View Stellar Feed</Link></button>
            </center>
        </>
    )
}

export default Home;