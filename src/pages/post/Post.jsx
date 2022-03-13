import { useState, useEffect } from 'react'
//firebase imports below`
import { doc, getFirestore, setDoc, addDoc, collection } from 'firebase/firestore'
import { getAuth } from 'firebase/auth';
import './post.css'

const Post = () => {

    const [message, setMessage] = useState('');
    const db = getFirestore();
    const auth = getAuth();

    const handleMessageSend = async () => {
        const collectionRef = collection(db, 'feed');

        await addDoc(collectionRef, {
            message: message,
            author: auth.currentUser.displayName,
            likes: 0,
            uid: auth.currentUser.uid,
        })

        setMessage('')
    }

    useEffect(
        () => {
            const docRef = doc(db, 'users', auth.currentUser.uid)
            setDoc(docRef, {
                name: auth.currentUser.displayName
            })
        }, [db, auth])

        // TO - DO: MAKE INPUT BOX EXPANDABLE
    return (
        <>
            <center className="postContainer">
                <h1>Post</h1>
                <div class="form__group field" >
                    <input class="form__field" name="name" id='name' required type='text' placeholder='Message' value={message}
                        onChange={(e) => setMessage(e.target.value)} />
                    <label for="name" class="form__label">Message</label>
                </div>

                <button class='createPost' onClick={handleMessageSend}>Create Post!</button>
                <br />
            </center>
        </>
    )
}

export default Post;