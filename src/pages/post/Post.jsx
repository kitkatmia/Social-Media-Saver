import {useState, useEffect} from 'react'
//firebase imports below`
import {doc, getFirestore, setDoc, addDoc, collection} from 'firebase/firestore'
import { getAuth } from 'firebase/auth';

const Post = ()=>{


    const [message, setMessage] = useState('');
    const db = getFirestore();
    const auth = getAuth();

    const handleMessageSend = async () =>{
        const collectionRef = collection(db, 'feed');

        await addDoc(collectionRef, {
            message: message,
            author: auth.currentUser.displayName,
            likes: 0,
        })

        setMessage('')
        
    }
    
    useEffect(
    ()=> {
        const docRef = doc(db, 'users', auth.currentUser.uid)
        setDoc(docRef, {
            name: auth.currentUser.displayName
        })
    }, [db, auth])


    return (
        <>
            <center className="postContainer">
                <h1>Post</h1>
                <input type = 'text' placeholder='Enter a message' value = {message} 
                onChange = {(e)=> setMessage(e.target.value)} />
                <button onClick = {handleMessageSend}>Send</button>
                <br />
                <button onClick = {()=>auth.signOut()}>Sign Out</button>
            </center>
        </>
    )
}

export default Post;