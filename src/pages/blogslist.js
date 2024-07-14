import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import { collection, doc, getDocs, getDoc } from "firebase/firestore";
import { store } from '../firebase'
import { Button, Container } from "react-bootstrap";

//const Blogslist = collection(db,'blogs');
// const querySnapshot = await getDocs(Blogslist);

const BlogslistView = () => {

  const [blogs, Setblogs] = useState([]);

  useEffect(() => {
    // Fetch data from a Firestore collection
    const fetchData = async () => {
      try {
        const collectionRef = collection(store, 'blogs');
        const snapshot = await getDocs(collectionRef);

        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));

        console.log(data, "data")
        Setblogs(data)
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData()
  }, []);

  // const DeleteBlog = (id)=> {
  //     querySnapshot.doc(id).delete().then(() => {
  //         alert("Document successfully deleted!");
  //     }).catch((error) => {
  //         console.error("Error removing document: ", error);
  //     });
  // };
  console.log(blogs, "blogs blogs")
  return (
    <Container fluid className="pt-4">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Packaging Size</th>
            <th>Packaging Type</th>
            <th>Manufacturer</th>
            <th>Usage/Application</th>
            <th>Shelf Life</th>
            <th>Form</th>
            <th>Item Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            blogs.map((blog, index) => {
              console.log(blog,"blogblog")
              return (
                <tr key={index}>
                  <td><p>{index+1}</p></td>
                  <td><p><Link to={`details/${blog.id}`}>{blog.title}</Link></p></td>
                  <td><p>{blog.packaging_size}</p></td>
                  <td><p>{blog.packaging_type}</p></td>
                  <td><p>{blog.manufacturer}</p></td>
                  <td><p>{blog.usage}</p></td>
                  <td><p>{blog.shelf_life}</p></td>
                  <td><p>{blog.product_form}</p></td>
                  <td><p>{blog.item_name}</p></td>
                  <td width={180}>
                    <Button className="mx-3" title={blog.timestamp}>Edit</Button>
                    <Button>Delete</Button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
    </Container>
  );
};

export default BlogslistView;