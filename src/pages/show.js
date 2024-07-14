import React , {useState} from "react";
import { useParams} from 'react-router-dom';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import {db} from "../firebase";
// const DB =db.firestore()
const DB = getFirestore(db);
const Blogslist = collection(DB,'blogs');

const BlogView = ()=> {
    const {id} = useParams();
    const[blogs, Setblogs] = useState([]);
    Blogslist.doc(id).get().then((snapshot) => {
        const data = snapshot.data()
        Setblogs(data);
    });
    return(
        <div>
            <p>Title : { blogs.Title}</p>
            <p>Body: {blogs.Body}</p>
        </div>
    );
};
export default BlogView;