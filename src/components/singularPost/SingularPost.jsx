
import './singularPost.css'
import {useState} from 'react';
import { doc, updateDoc, getFirestore } from "firebase/firestore";

const SingularPost = ({docStuff}) => {
    
    const message = docStuff.data().message
    const author = docStuff.data().message

    const db = getFirestore();

    const [likes, setLikes] = useState(docStuff.data().likes)

    const handleLike = async() => { 
        const docRef = doc(db, "feed", docStuff.id);
        await updateDoc(docRef, {
            likes: likes+1
        })

        setLikes(likes+1)
    }
    
    return (
        <>
            <div className = 'singular-post-container'>
                <h3>{message}</h3>
                <div className = 'authorButton-container'>
                    <p>{author}</p>
                    <button onClick = {handleLike}>{likes} {'<3'}</button>
                </div>
            </div>
        </>
    )
}

export default SingularPost;