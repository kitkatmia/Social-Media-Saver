import './feed.css'
import { useState, useEffect } from 'react'
//functions provided by firebase to get data from firestore
import { collection, deleteDoc, getDocs, getFirestore, doc} from "firebase/firestore";

//compoentn we created to render indiviual posts given data
import SingularPost from '../../components/singularPost/SingularPost'

const Feed = () => {

    //sets the state of the posts to an empty array at first and then will be filled with data after the useEffect fires
    const [feedArray, setFeedArray] = useState([]);

    //creates a reference to the firestore database
    const db = getFirestore();

    useEffect(() => {

        const getData = async () => {
            //gets the data from the firestore database asynchronously

            //we will store the data in a variable called tempArray at first and then update the state of the feedArray
            const tempArray = []

            //gets the data from the firestore database

            //querySnapshot is an array of documents that match the query in this case we have asked for the collection known as feed
            //we reqest it using the getDocs asycn function. I have used the await keyword to wait for the data to be returned and then move on
            const querySnapshot = await getDocs(collection(db, "feed"));


            //loops through the querySnapshot and pushes each doc into the tempArray
            querySnapshot.forEach((doc) => {
                // **NOTE EACH DOCUMENT IN THE FEED COLLECTION HAS A LOT OF DATA ON IT NOT JUST THE TEXT AND THE AUTHOR. IT INCLUDE THE DOC ID WHCIH IS UNIQUE AND NEEDED TO REFFERENCE IT
                tempArray.push(doc);
            });

            //sets the state of the feedArray to the tempArray after the data has been loaded
            setFeedArray(tempArray)
        }

        //calls the getData function
        getData();



    }, [db])


    const handleDelete = async (id) => {
        const deletedDocRef = doc(db, 'feed', id)
        await deleteDoc(deletedDocRef);

        setFeedArray((currentValue) => currentValue.filter((item) => item.id !== id))
    }


    return (
        <>
            <center>
                <h1>Feed</h1>
                <br />
                {/* go through every object in the array and pass in all the document data */}
                {
                    feedArray.map((post, index) => {

                        return (
                            <span key={index}>
                                <SingularPost deleteFunction={handleDelete} docStuff={post} />
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