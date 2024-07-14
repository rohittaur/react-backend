import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, CardBody } from "react-bootstrap"
import { Link, useParams } from 'react-router-dom';
import {  doc, getDoc } from "firebase/firestore";
// import htmlToDraft from 'html-to-draftjs';
// import draftToHtml from 'draftjs-to-html';
// import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';
import { store } from '../firebase'


const BlogDetail = () => {
    let { Id } = useParams();
    // console.log(Id, "blog Id")
    const [blog, setBlog] = useState();

    useEffect(() => {
        // Fetch data from a Firestore collection
        const fetchData = async () => {
            try {
                const docRef = doc(store, "blogs", Id);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {

                    console.log("Document data:", docSnap.data());

                    setBlog(docSnap.data())
                } else {
                    console.log("No such document!");
                }

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData()
    }, [Id]);

    return (
        <Container>
            <div className="pb-4">
                <Link to="/"> Back to list</Link>
            </div>
            {blog ?
                <Card>
                    <CardBody>
                        <Row>
                            <Col sm={"12"}>
                                <h3>{blog ? blog.title.title ? blog.title.title : blog.title :  ""}</h3>
                                <hr/>
                            </Col>
                            <Col sm={"12"}>
                                <img 
                                    src={blog.bannerImage} 
                                    alt={blog ? blog.title.title ? blog.title.title : blog.title :  ""} 
                                    className={"mw-100"}
                                />
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: blog.description
                                    }}
                                />

                            </Col>
                        </Row>
                    </CardBody>
                </Card>
                : <div>Loading....</div>
            }
        </Container>
    )
}

export default BlogDetail;