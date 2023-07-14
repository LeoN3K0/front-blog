import React, { useState, useEffect } from 'react';
import Editor from './Editor';
import Preview from './BlogPreview';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useAuth } from '../AuthContext';
import { useParams, useNavigate } from 'react-router-dom';
import {
  EditBlogContainer,
  EditBlogCard,
  EditBlogForm,
  FormTitle,
  FormLabel,
  FormInput,
  ButtonContainer,
  SaveButton,
  DeleteButton,
  PublishButton,
  UploadButton,
  DeleteImageButton,
} from './styledcomps/editBlogStyles';

const EditBlog = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [blogInfo, setBlogInfo] = useState('');
  const [imageLink, setImageLink] = useState('');
  const [ isPublished, setPublished ] = useState(false);
  const { userName } = useAuth();
  const navigate = useNavigate();
  const token = Cookies.get('jwt');

  useEffect(() => {
    const getBlogsByAuthor = async (username) => {
      try {
        const response = await axios.get(`http://localhost:3000/blogs/${username}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
  
        const blogs = response.data;
        return blogs;
      } catch (error) {
        console.error(error);
        throw new Error("Failed to fetch blogs by author");
      }
    };

    if (userName) {
      getBlogsByAuthor(userName)
        .then((blogs) => {
          // Check if any blog matches the given id
          const matchingBlog = blogs.find((blog) => blog.id === parseInt(id));
          
  
          if (matchingBlog) {
            console.log("Match found");
            setTitle(matchingBlog.title);
            setBody(matchingBlog.body);
            setBlogInfo(matchingBlog);
            setPublished(matchingBlog.published); 
            setImageLink(matchingBlog.image);           
          } else {
            console.log("Match not found");
            navigate('/*');
          }
        })
        .catch((error) => {
          console.error(error);
          navigate('/*');
        });
    }
  }, [id, userName, navigate, token, isPublished]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleBodyChange = (value) => {
    setBody(value);
  };

  const handleSave = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3000/blogs/${id}`, {
      title: title,
      body: body,
      published: blogInfo.published,
      publishedDate: blogInfo.publishedDate,
      author: blogInfo.author,
      image: imageLink,
    }, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        console.log(response.data.message);
      })
      .catch((error) => {
        console.error('Failed to save draft:', error);
      });
  };

  const handleDelete = () => {
    axios
      .delete(`http://localhost:3000/blogs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        //redirect page back to home or profile after deletiton.
        navigate('/profile');
      })
      .catch((error) => {
        console.error('Error deleting blog post:', error);
      });
  };

  const handlePublish = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3000/blogs/${id}`, {
      title: title,
      body: body,
      published: true,
      publishedDate: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),
      author: blogInfo.author,
      image: imageLink,
    }, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        console.log(response.data.message);
      })
      .catch((error) => {
        console.error('Failed to publish:', error);
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
    <EditBlogContainer>
      <EditBlogCard>
        <FormTitle>Edit Blog Post</FormTitle>
        <EditBlogForm>
          <div>
            <FormLabel>Title:</FormLabel>
            <FormInput type="text" value={title} onChange={handleTitleChange} />
          </div>
          <div>
            <FormLabel>Body:</FormLabel>
            <Editor value={body} onChange={handleBodyChange} placeholder="Write your blog content..." />
          </div>
          <div>
            <FormLabel>Display image:</FormLabel>
            {imageLink ? (
              <div>
                <DeleteImageButton onClick={handleImageDelete}>Delete</DeleteImageButton> 
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
              <SaveButton onClick={handleSave}>Save Changes</SaveButton>
            </div>
            {!isPublished &&
              <div>
              <PublishButton onClick={handlePublish}>Publish</PublishButton>
            </div>
            }
            <div>
              <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
            </div>
          </ButtonContainer>
        </EditBlogForm>
      </EditBlogCard>
      <Preview title={title} body={body} />
    </EditBlogContainer>
  );
};

export default EditBlog;
