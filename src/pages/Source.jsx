import Post from'./post/Post'
import Home from './home/Home'
import Feed from './feed/Feed'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

const Source = () =>{
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route index path = '/' element = {<Home />}/>
                    <Route exact path = 'post' element = {<Post />} />
                    <Route exact path = 'feed' element = {<Feed />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Source;