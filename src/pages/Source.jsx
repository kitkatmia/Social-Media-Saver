//import local components
import Post from'./post/Post'
import Home from './home/Home'
import Feed from './feed/Feed'

//import tools that will help us to render the routes
import {BrowserRouter, Routes, Route} from 'react-router-dom'
//BrowserRouter is a component that will help us to render the routes
//Routes of a webpage include the path and the component that will be rendered
//an example is Mvhs.io/map. map is the route and will load the Map component

//Each route object takes a path and a component and will render the component listed when the route is changeds
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