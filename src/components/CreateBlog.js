import React, { useState } from 'react';
import Editor from './Editor';
import Preview from './BlogPreview';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useAuth } from '../AuthContext';
import { useNavigate } from 'react-router-dom';
import {
  CreateBlogContainer,
  CreateBlogCard,
  CreateBlogForm,
  FormTitle,
  FormLabel,
  FormInput,
  ButtonContainer,
  SaveButton,
  PublishButton,
  DeleteButton,
  UploadButton
} from './styledcomps/createBlogStyles';

const CreateBlog = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [imageLink, setImageLink] = useState('');
  const { userName } = useAuth();
  const token = Cookies.get('jwt');
  const navigate = useNavigate();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleBodyChange = (value) => {
    setBody(value);
  };

  const handleSaveDraft = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/create-blog', {
      title: title,
      body: body,
      published: false,
      publishedDate: null,
      author: userName,
      image: imageLink,
    }, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        console.log(response.data.message);
        navigate(`/editblog/${response.data.blogId.id}`)
      })
      .catch((error) => {
        console.error('Failed to save draft:', error);
      });
  };


  const handlePublish = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/create-blog', {
      title: title,
      body: body,
      published: true,
      publishedDate: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),
      author: userName,
      image: imageLink,
    }, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        console.log(response.data.message);        
        navigate(`/front-blog/blogs/${response.data.blogId.id}`);
      })
      .catch((error) => {
        console.error('Failed to publish blog:', error);
      });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('image', file);

    axios.post('http://localhost:3000/upload-image', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then((response) => {
        console.log(response.data);
        setImageLink(response.data.imageUrl);
      })
      .catch((error) => {
        console.error('Failed to upload image:', error);
      });
  };

  const handleImageDelete = () => {
    if (!imageLink) {
      return; // No image to delete
    }
  
    const imageName = imageLink.substring(imageLink.lastIndexOf('/') + 1);
  
    axios.delete(`http://localhost:3000/delete-image/${encodeURIComponent(imageName)}`, {
    })
      .then((response) => {
        console.log(response.data);
        setImageLink('');
      })
      .catch((error) => {
        console.error('Failed to delete image:', error);
      });
  };

  return (
    <CreateBlogContainer>
      <CreateBlogCard>
        <FormTitle>Create Blog Post</FormTitle>
        <CreateBlogForm>
          <div>
            <FormLabel>Title:</FormLabel>
            <FormInput type="text" value={title} onChange={handleTitleChange} />
          </div>
          <div>
            <FormLabel>Body:</FormLabel>
            <Editor value={body} onChange={handleBodyChange} placeholder="Write your blog content..." onImageRemove={() => {}}/>
          </div>
          <div>
            <FormLabel>Display image:</FormLabel>
            {imageLink ? (
              <div>
                <DeleteButton onClick={handleImageDelete}>Delete</DeleteButton> 
                <span>{imageLink}</span>       
              </div>
            ) : (
              <div>
              <UploadButton component="label">
                Upload
                <input
                  type="file"
                  accept="image/*"
                  style={{ display: 'none' }}
                  onChange={handleImageUpload}
                />
              </UploadButton>
              <span>No Image Detected</span>
              </div>
            )}
          </div>
          <ButtonContainer>
            <div>
              <SaveButton onClick={handleSaveDraft}>
                Save Draft
              </SaveButton>
            </div>
            <div>
              <PublishButton onClick={handlePublish}>Publish</PublishButton>
            </div>
          </ButtonContainer>
        </CreateBlogForm>
      </CreateBlogCard>
      <Preview title={title} body={body}/>
    </CreateBlogContainer>
  );  
};

export default CreateBlog;
