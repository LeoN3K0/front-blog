import React, { useState, useEffect } from 'react';
import { Typography, Button, Divider } from '@mui/material';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import {
  ProfileContainer,
  UserInfoCard,
  BlogPostsCard,
  SectionTitle,
  BlogPostItem,
  BlogPostTitle,
  PublishedStatus,
  CreateBlogPostButton,
  ButtonContainer,
  BlogPostsHeader,
} from '../styles/profileStyles';

const Profile = () => {
  const [userInfo, setUserInfo] = useState([]);
  const [blogPosts, setBlogPosts] = useState([]);
  const token = Cookies.get('jwt');
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch User Info
    axios
      .get('https://back-blog-e8li.onrender.com/profile', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setUserInfo(response.data);
      })
      .catch((error) => {
        console.log(error);
        setUserInfo(null);
      });
  
    // Fetch blog users posts
    axios
      .get(`https://back-blog-e8li.onrender.com/blogs/${userInfo.username}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setBlogPosts(response.data);
      })
      .catch((error) => {
        console.log(error);
        setBlogPosts([]);
      });
  }, [token, userInfo.username]);

  const handleCreateBlogPost = () => {
    navigate('/front-blog/createblog');
  };

  const handleEditBlogPost = (postId) => {
    navigate(`/front-blog/editblog/${postId}`);
  };

  const handleDeleteBlogPost = (postId) => {
    axios
      .delete(`https://back-blog-e8li.onrender.com/blogs/${postId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        // Remove the deleted blog post from the state
        setBlogPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
      })
      .catch((error) => {
        console.error('Error deleting blog post:', error);
      });
  };

  return (
    <ProfileContainer>
      <UserInfoCard>
        <Typography variant="h5">{userInfo.username}</Typography>
        {userInfo ? (
          <div>
            <Typography>Email: {userInfo.email}</Typography>
            <Typography>
              Joined:{' '}
              {new Date(userInfo.joined).toLocaleString('en-US', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
              })}
            </Typography>
          </div>
        ) : (
          <Typography>No user information found.</Typography>
        )}
      </UserInfoCard>

      <BlogPostsCard>
        <BlogPostsHeader>
          <SectionTitle variant="h5">Blog Posts</SectionTitle>
          <ButtonContainer>
            <CreateBlogPostButton onClick={handleCreateBlogPost}>
              Create Blog Post
            </CreateBlogPostButton>
          </ButtonContainer>
        </BlogPostsHeader>
        {blogPosts.length > 0 ? (
          <>
            {blogPosts.map((post, index) => (
              <div key={post.id}>
                <BlogPostItem>
                  <div>
                    <BlogPostTitle>{post.title}</BlogPostTitle>
                    <PublishedStatus variant="body2">{post.published ? 'Published' : 'Draft'}</PublishedStatus>
                  </div>
                  <div>
                    <Button variant="outlined" onClick={() => handleEditBlogPost(post.id)}>Edit</Button>
                    <Button variant="outlined" onClick={() => handleDeleteBlogPost(post.id)}>Delete</Button>
                  </div>
                </BlogPostItem>
                {index !== blogPosts.length - 1 && <Divider />}
              </div>
            ))}
          </>
        ) : (
          <Typography>No blog posts found.</Typography>
        )}
      </BlogPostsCard>
    </ProfileContainer>
  );
};

export default Profile;
