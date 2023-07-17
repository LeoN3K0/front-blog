import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import { BlogPostContainer, BlogPostContent, BlogPostTitle, BlogPostBody, BlogPostImage, SmallTextContainer, EditIconStyled, ByAuthor, PublishedOn, } from './styledcomps/blogPostStyles';

const BlogPost = () => {
  const { id } = useParams();
  const [blogPost, setBlogPost] = useState(null);
  const { userName } = useAuth();
  const navigate = useNavigate();
  
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/blogs?id=${id}`);
        const blogPosts = response.data;
        
        if (Array.isArray(blogPosts) && blogPosts.length > 0) {
          setBlogPost(blogPosts[0]);
        }
      } catch (error) {
        console.error('Failed to fetch blog post:', error);
      }
    };

    fetchPost();
  }, [id]);

  const handleEdit = () => {
    navigate(`/front-blog/editblog/${id}`);
  };
  

  return (
    <BlogPostContainer>
      {blogPost && (
        <BlogPostContent>          
          <BlogPostTitle>{blogPost.title}</BlogPostTitle> 
          <SmallTextContainer className='ql-editor'>
            <ByAuthor>By {blogPost.author}</ByAuthor>
            <PublishedOn>Published On {new Date(blogPost.published_date).toLocaleDateString('en-US')}</PublishedOn>
            {userName === blogPost.author && <EditIconStyled onClick={handleEdit} />}
          </SmallTextContainer>          
          {blogPost.image && <BlogPostImage className='ql-editor' src={blogPost.image} alt={blogPost.title} />}           
          <BlogPostBody className='ql-editor' dangerouslySetInnerHTML={{ __html: blogPost.body }} />     
        </BlogPostContent>
      )}
    </BlogPostContainer>
  );
};

export default BlogPost;
