import './home.css'
import {Link} from 'react-router-dom'
const Home = ()=>{
    return(
        <>
            <center>
                <h1>Welcome to Social Media Savior</h1>
                <button><Link to = 'post'>Post Something New</Link></button>
                <br/>
                <br/>
                <button><Link to = 'feed'>View Stellar Feed</Link></button>
            </center>
        </>
    )
}

export default Home;