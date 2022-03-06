import './singularPost.css'
import { useState } from 'react';
import { doc, updateDoc, getFirestore } from "firebase/firestore";

const SingularPost = ({ docStuff }) => {
    //docstuff is the data of the document that is passed in
    // docStuff has a function .data() attatched which returns the data of the document
    const message = docStuff.data().message
    const author = docStuff.data().author

    const db = getFirestore();

    const [likes, setLikes] = useState(docStuff.data().likes)
    //on mount the likes state is set to the likes of the document


    //function to handle liking the post
    const handleLike = async () => {
        //gets reference to the document
        const docRef = doc(db, "feed", docStuff.id);
        //updates the likes of the document
        await updateDoc(docRef, { likes: likes + 1 })

        //updates the state of the likes on page
        setLikes(likes + 1)
    }

    return (
        <>
            <div className='singular-post-container'>
                {/* Dynamically intersn in message, author, and likes */}
                <h3>{message}</h3>
                <div className='authorButton-container'>
                    <p>{author}</p>
                    <button onClick={handleLike}>{likes} {'<3'}</button>
                </div>
            </div>
        </>
    )
}

export default SingularPost;