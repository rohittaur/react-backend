import React, { useEffect, useState } from "react";
import { collection, addDoc, setDoc, doc, serverTimestamp } from 'firebase/firestore'
import {
    ref,
    uploadBytes,
    getDownloadURL,
    listAll,
    list,
} from "firebase/storage";

import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import { v4 } from "uuid";
// import {stateToHTML} from 'draft-js-export-html';
// import htmlToDraft from 'html-to-draftjs';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { store } from "../firebase";
import { storage } from "../firebase";
import { ReactComponent as Loader } from "../assets/loading.svg"




const CreateBlog = () => {

    // let html = stateToHTML(editorState.getCurrentContent());
    // const contentBlock = htmlToDraft(html);
    // if (contentBlock) {
    //   const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
    //   editorStateInitial = EditorState.createWithContent(contentState);
    // }

    const [blogData, setBlogData] = useState();
    const [descData, setDescData] = useState();
    const [editorState, setEditorState] = React.useState(EditorState.createEmpty());
    const [imageUpload, setImageUpload] = useState(null);
    const [imageUrls, setImageUrls] = useState();
    const [loader, setLoader] = useState(false);


    // const Blogslist = getDocs(collection(db,'blogs'));
    const collectionRef = collection(store, 'blogs');
    console.log(
        collectionRef,store,"jsdskdjskdjskdjskdj"
    )
    // const snapshot = await getDocs(collectionRef);

    // const onEditorStateChange = (editorState) => {
    //     setEditorState({
    //       editorState,
    //     });
    //   };


    const onEditorStateChange = async (state) => {

        await setEditorState(state);
        // setContent(draftToHtml(convertToRaw(newState.getCurrentContent())));

        const data = draftToHtml(convertToRaw(editorState.getCurrentContent()));
        console.log(data, "editorState")
        setDescData(data)
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBlogData({
            [name]: value
        })
    }

    console.log(descData, blogData, "blogData");
    // const uploadFile = () => {
    //     if (imageUpload == null) return;
    //     const imageRef = ref(storage, `blog-images/${imageUpload.name + v4()}`);
    //     uploadBytes(imageRef, imageUpload).then((snapshot) => {
    //         getDownloadURL(snapshot.ref).then((url) => {
    //             setImageUrls((prev) => [...prev, url]);
    //             console.log(url, "url of image")
    //         });
    //     });

    // };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoader(true)
       // if (imageUpload == null) return;
        //const imageRef = ref(storage, `blog-images/${imageUpload.name + v4()}`);
        try {
            addDoc(collectionRef, {
                title: blogData,
                description: descData,
                bannerImage: imageUrls,
                timestamp: serverTimestamp(),
                author: "Admin"
    
            });
        } catch (error) {
            console.log(error,"error");
            setLoader(false)
        }
        // uploadBytes(imageRef, imageUpload).then((snapshot) => {
        //     getDownloadURL(snapshot.ref).then((url) => {
        //         setImageUrls(url);
                
        //         console.log(url, "url of image")
        //     }).then(()=>{
        //         console.log(imageUrls, "url of image")
        //         setTimeout(() => { 
        //             addDoc(collectionRef, {
        //                 title: blogData,
        //                 description: descData,
        //                 bannerImage: imageUrls,
        //                 timestamp: serverTimestamp(),
        //                 author: "Admin"
            
        //             });
        //             setBlogData();
        //             setDescData();
        //             setImageUpload(null);
        //             setImageUrls()
        //             setEditorState(EditorState.createEmpty())
        //             setLoader(false)
        //         }, 2000);
        //         }
        //     ).catch((error)=>{
        //         console.log(error,"error")
        //     });
        // }).catch((error) => {
        //     console.log(error, "error of final catch")
        // }).finally(() => {
        //     setBlogData();
        //     setDescData();
        //     setImageUpload(null);
        //     setImageUrls()
        //     setLoader(false)
        // });

    }



    return (
        <div className="col-md-6 mx-auto position-relative">
            {loader ? <div className="loader">
                {/* <img src={Loader} /> */}
                <Loader />
            </div>
                : ""}
            <div className="card p-4">
                <h3>Blog Add</h3>
                <form >
                    <div>
                        <input
                            type="text"
                            placeholder="Title"
                            name="title"
                            value={blogData ? blogData.title : ""}
                            onChange={(e) => { handleChange(e) }} required
                            className="form-control mb-3"

                        />
                    </div>
                    <div className="pt-2 pb-4 ">
                        <input
                            type="file"
                            onChange={(event) => {
                                setImageUpload(event.target.files[0]);
                            }}
                        />
                        {/* <button onClick={uploadFile}> Upload Image</button> */}
                    </div>
                    <div className="border mb-3">
                        <Editor
                            editorState={editorState}
                            toolbarClassName="toolbarClassName"
                            wrapperClassName="wrapperClassName"
                            editorClassName="editorClassName"
                            onEditorStateChange={onEditorStateChange}
                        />
                    </div>
                    <div>
                        <textarea
                            disabled
                            value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
                            width={"100%"}

                        />
                    </div>
                    {/* <textarea  
                        name="description" 
                        value={blogData ? blogData.description : ""}
                        type="text" 
                        placeholder="write your content here" 
                        rows="10" cols="150" 
                        onChange={(e)=>handleChange(e)} 
                        className="form-control mb-3"
                        required 
                    >
                    </textarea> */}
                    <div className="mt-3 pt-3">
                        <button
                            type="submit"
                            onClick={handleSubmit}
                            className="btn btn-warning"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateBlog;