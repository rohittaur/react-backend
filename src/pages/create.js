import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { store } from "../firebase";
import { ReactComponent as Loader } from "../assets/loading.svg"




const CreateBlog = () => {

    const { register, handleSubmit, reset  } = useForm({
        defaultValues: {
            title: '',
            packaging_size: '',
            packaging_type:'',
            manufacturer:'',
            usage:'',
            brand:'',
            shelf_life:'',
            item_name:'',
            product_form:'',
            item_price:'',
            min_order_qty:'',
            product_url:''
        }
    });

    const [loader, setLoader] = useState(false);
    
    // const Blogslist = getDocs(collection(db,'blogs'));
    const collectionRef = collection(store, 'blogs');

    const handleReset = () => {
        reset({
            title: '',
            packaging_size: '',
            packaging_type:'',
            manufacturer:'',
            usage:'',
            brand:'',
            shelf_life:'',
            item_name:'',
            product_form:'',
            item_price:'',
            min_order_qty:'',
            product_url:''
        });
      };

    const onSubmit = async (data) => {
        console.log(data, "data data data")
        // e.preventDefault();
        setLoader(true);
        try {
            await addDoc(collectionRef, {
                ...data,
                timestamp: serverTimestamp(),
                author: "Admin"
            }).then(() => {
                console.log("Document successfully created!");
                setLoader(false);
                handleReset();
            }).catch((error) => {
                console.error("Error creating document: ", error);
            });
            
            console.log("Document successfully written!");
        } catch (error) {
            console.error("Error adding document: ", error);
            setLoader(false);
        }
    };



    return (
        <div className="col-md-6 mx-auto position-relative">
            {loader ? <div className="loader">
                {/* <img src={Loader} /> */}
                <Loader />
            </div>
                : ""}
            <div className="card p-4">
                <h3>Product Details</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    
                    <input 
                        {...register("title")} 
                        type="text"
                        placeholder="Title"
                        name="title"
                        className="form-control mb-3"
                    />
                    <input 
                        {...register("packaging_size")} 
                        type="text"
                        placeholder="Packaging Size"
                        name="packaging_size"
                        className="form-control mb-3"
                    />
                    <input 
                        {...register("packaging_type")} 
                        type="text"
                        placeholder="Packaging Type"
                        name="packaging_type"
                        className="form-control mb-3"
                    />
                    <input 
                        {...register("manufacturer")} 
                        type="text"
                        placeholder="Manufacturer"
                        name="manufacturer"
                        className="form-control mb-3"
                    />
                    <input 
                        {...register("usage")} 
                        type="text"
                        placeholder="Usage/Application"
                        name="usage"
                        className="form-control mb-3"
                    />
                    <input 
                        {...register("brand")} 
                        type="text"
                        placeholder="Brand"
                        name="brand"
                        className="form-control mb-3"
                    />
                    <input 
                        {...register("product_form")} 
                        type="text"
                        placeholder="Form"
                        name="product_form"
                        className="form-control mb-3"
                    />
                    <input 
                        {...register("shelf_life")} 
                        type="text"
                        placeholder="Shelf Life"
                        name="shelf_life"
                        className="form-control mb-3"
                    />
                    <input 
                        {...register("item_name")} 
                        type="text"
                        placeholder="Item Name"
                        name="item_name"
                        className="form-control mb-3"
                    />
                    <input 
                        {...register("item_price")} 
                        type="text"
                        placeholder="Item Price"
                        name="item_price"
                        className="form-control mb-3"
                    />
                    <input 
                        {...register("min_order_qty")} 
                        type="text"
                        placeholder="Minimum Order Quantity"
                        name="min_order_qty"
                        className="form-control mb-3"
                    />
                    
                    <input 
                        {...register("product_url")} 
                        type="text"
                        placeholder="Product Url"
                        name="product_url"
                        className="form-control mb-3"
                    />
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