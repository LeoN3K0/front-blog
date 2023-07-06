import React, { useState, useEffect } from 'react';
import { Typography, Button } from '@mui/material';
import axios from 'axios';
import Cookies from 'js-cookie';
import {
  ProfileContainer,
  UserInfoCard,
  BlogPostsCard,
  SectionTitle,
  BlogPostItem,
  BlogPostTitle,
  CreateBlogPostButton,
  ButtonContainer,
  BlogPostsHeader,
} from './styledcomps/profileStyles';

const Profile = () => {
  const [userInfo, setUserInfo] = useState([]);
  const [blogPosts, setBlogPosts] = useState([]);
  const token = Cookies.get('jwt');

  useEffect(() => {
    // Fetch User Info
    axios
      .get('http://localhost:3000/profile', {
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
  
    // Fetch blog posts
    axios
      .get('http://localhost:3000/blogPosts')
      .then((response) => {
        setBlogPosts(response.data);
      })
      .catch((error) => {
        console.log(error);
        setBlogPosts([]);
      });
  }, [token]);

  const handleCreateBlogPost = () => {
    // Handle create blog post button click
    // Redirect to the create blog post page
  };

  return (
    <ProfileContainer>
      <UserInfoCard>
        <Typography variant="h5">{userInfo.username}</Typography>
        {userInfo ? (
          <div>
            <Typography>Email: {userInfo.email}</Typography>
            <Typography>
              Joined:{" "}
              {new Date(userInfo.joined).toLocaleString("en-US", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
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
          blogPosts.map((post) => (
            <BlogPostItem key={post.id}>
              <BlogPostTitle>{post.name}</BlogPostTitle>
              <div>
                <Button variant="outlined">Edit</Button>
                <Button variant="outlined">Delete</Button>
              </div>
            </BlogPostItem>
          ))
        ) : (
          <Typography>No blog posts found.</Typography>
        )}
      </BlogPostsCard>
    </ProfileContainer>
  );
};

export default Profile;
