import React, { useEffect, useState } from 'react';
import { Button, Container, Form} from 'react-bootstrap';
// import axios from 'axios';
// import ErrorText from '../components/ErrorText';
// import Header from '../components/Header';
// import LoadingComponent from '../components/LoadingComponent';
// import Navigation from '../components/Navigation';
// import config from '../config/config';
// import logging from '../config/logging';
// import UserContext from '../contexts/user';
import { EditorState, ContentState, convertToRaw } from 'draft-js';
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
// import SuccessText from '../components/SuccessText';
import { Link } from 'react-router-dom';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const EditPage = (props) => {
    const [_id, setId] = useState('');
    const [title, setTitle] = useState('');
    const [picture, setPicture] = useState('');
    const [content, setContent] = useState('');
    const [headline, setHeadline] = useState('');
    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    const [saving, setSaving] = useState(false);
    // const [loading, setLoading] = useState(true);
    // const [success, setSuccess] = useState('');
    // const [error, setError] = useState('');

    // const { user } = useContext(UserContext).userState;
    
    useEffect(() => {
        // let blogID = props.match.params.blogID;

        // if (blogID)
        // {
        //     setId(blogID);
        //     getBlog(blogID);
        // }
        // else
        // {
        //     setLoading(false);
        // }

        // eslint-disable-next-line
    }, []);

    // const getBlog = async (id) => {
    //     try 
    //     {
    //         const response = await axios({
    //             method: 'GET',
    //             url: `/blogs/read/${id}`,
    //         });

    //         if (response.status === (200 || 304))
    //         {
    //             if (user._id !== response.data.blog.author._id)
    //             {
    //                 logging.warn(`This blog is owned by someone else.`);
    //                 setId('');
    //             }
    //             else
    //             {
    //                 setTitle(response.data.blog.title);
    //                 setContent(response.data.blog.content);
    //                 setHeadline(response.data.blog.headline);
    //                 setPicture(response.data.blog.picture || '');
                    
    //                 /** Convert html string to draft JS */
    //                 const contentBlock = htmlToDraft(response.data.blog.content);
    //                 const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
    //                 const editorState = EditorState.createWithContent(contentState);

    //                 setEditorState(editorState);
    //             }
    //         }
    //         else
    //         {
    //             setError(`Unable to retrieve blog ${_id}`);
    //         }
    //     } 
    //     catch (error) 
    //     {
    //         setError(error.message);
    //     }
    //     finally
    //     {
    //         setLoading(false);
    //     }
    // }

    // const createBlog = async () => {
    //     if (title === '' || headline === '' || content === '')
    //     {
    //         setError('Please fill out all fields.');
    //         setSuccess('');
    //         return null;
    //     }

    //     setError('');
    //     setSuccess('');
    //     setSaving(true);

    //     try 
    //     {
    //         const response = await axios({
    //             method: 'POST',
    //             url: `/blogs/create`,
    //             data: {
    //                 title,
    //                 picture,
    //                 headline,
    //                 content,
    //                 author: user._id
    //             }
    //         });

    //         if (response.status === 201)
    //         {
    //             setId(response.data.blog._id);
    //             setSuccess('Blog posted.  You can continue to edit on this page.');
    //         }
    //         else
    //         {
    //             setError(`Unable to save blog.`);
    //         }
    //     } 
    //     catch (error) 
    //     {
    //         setError(error.message);
    //     }
    //     finally
    //     {
    //         setSaving(false);
    //     }
    // }

    // const editBlog = async () => {
    //     if (title === '' || headline === '' || content === '')
    //     {
    //         setError('Please fill out all fields.');
    //         setSuccess('');
    //         return null;
    //     }

    //     setError('');
    //     setSuccess('');
    //     setSaving(true);
        
    //     try 
    //     {
    //         const response = await axios({
    //             method: 'PATCH',
    //             url: `/blogs/update/${_id}`,
    //             data: {
    //                 title,
    //                 picture,
    //                 headline,
    //                 content
    //             }
    //         });

    //         if (response.status === 201)
    //         {
    //             setSuccess('Blog updated.');
    //         }
    //         else
    //         {
    //             setError(`Unable to save blog.`);
    //         }
    //     } 
    //     catch (error) 
    //     {
    //         setError(error.message);
    //     }
    //     finally
    //     {
    //         setSaving(false);
    //     }
    // }

    // if (loading) return <LoadingComponent />;
    
    console.log(content,"hrllo" )
    return (
        <Container fluid className="p-0">
            {/* <Navigation /> */}
            {/* <Header
                image="https://startbootstrap.github.io/startbootstrap-clean-blog/img/home-bg.jpg"
                headline=""
                title={_id !== '' ? 'Edit Your Blog' : 'Create a Blog'}
            /> */}
            <Container className="mt-5 mb-5">
                {/* <ErrorText error={error} /> */}
                <Form>
                    
                        <lable for="title">Title</lable>
                        <Form.Control 
                            type="text" 
                            name="title"
                            value={title} 
                            id="title"
                            placeholder="Enter a title"
                            disabled={saving}
                            onChange={event => {
                                setTitle(event.target.value);
                            }}
                        />
                    
                    
                        <lable for="picture">Picture URL</lable>
                        <Form.Control 
                            type="text" 
                            name="picture"
                            value={picture}
                            id="picture"
                            placeholder="Picture URL"
                            disabled={saving}
                            onChange={event => {
                                setPicture(event.target.value);
                            }}
                        />
                    
                    
                        <lable for="headline">Headline</lable>
                        <Form.Control 
                            type="text" 
                            name="headline"
                            value={headline} 
                            id="headline"
                            placeholder="Enter a headline" 
                            disabled={saving}
                            onChange={event => {
                                setHeadline(event.target.value);
                            }}
                        />
                    
                    
                        <lable>Content</lable>
                        <Editor
                            editorState={editorState}
                            toolbarClassName="toolbarClassName"
                            wrapperClassName="wrapperClassName"
                            editorClassName="editorClassName"
                            onEditorStateChange={newState => {
                                setEditorState(newState);
                                setContent(draftToHtml(convertToRaw(newState.getCurrentContent())));
                            }}
                            
                        />
                    
                    
                        {/* <SuccessText success={success} /> */}
                    
                    
                        <Button
                            block
                            onClick={() => {
                                if (_id !== '')
                                {
                                    // editBlog();
                                }
                                else
                                {
                                    // createBlog();
                                }
                            }}
                            disabled={saving}
                        >
                            <i className="fas fa-save mr-1"></i> 
                            {_id !== '' ?
                                "Update"
                            :
                                "Post"
                            }
                        </Button>
                        {_id !== '' &&
                            <Button block color="success" tag={Link} to={`/blogs/${_id}`}>
                                Go to your blog post!
                            </Button>
                        }
                    
                    
                        <lable>Preview</lable>
                        <div className="border ql-container p-2">
                            <div 
                                dangerouslySetInnerHTML={{ 
                                    __html: content
                                }} 
                            />
                        </div>
                    
                </Form>
                {/* <ErrorText error={error} /> */}
            </Container>
        </Container>
    )
}

export default EditPage;