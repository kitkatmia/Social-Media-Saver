import './feed.css'
import {useState, useEffect} from 'react'
import { collection, getDocs, getFirestore } from "firebase/firestore";

import SingularPost from '../../components/singularPost/SingularPost'

const Feed = () =>{

    const [feedArray, setFeedArray] = useState([]);

    const db = getFirestore();
    
    useEffect(()=>{

        const getData = async () =>{
            const tempArray = []

            const querySnapshot = await getDocs(collection(db, "feed"));

            querySnapshot.forEach((doc) => {
                tempArray.push(doc);
            });
            
            setFeedArray(tempArray)
        }

        getData();

    }, [db])

    return(
        <>
            <center>
                <h1>Feed</h1>
                <br />
                {
                    feedArray.map((post, index) =>{

                        return(
                            <span key = {index}>
                                <SingularPost docStuff = {post} />
                                <br />
                            </span>
                        )
                    })
                }

            </center>
        </>
    )
}

export default Feed;