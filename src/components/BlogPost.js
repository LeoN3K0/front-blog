import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { BlogPostContainer, BlogPostCard, BlogPostTitle, BlogPostBody, BlogPostImage, SmallTextContainer, ByAuthor, PublishedOn, } from './styledcomps/blogPostStyles';

const BlogPost = () => {
  const { id } = useParams();
  const [blogPost, setBlogPost] = useState(null);
  
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
  

  return (
    <BlogPostContainer>
      {blogPost && (
        <BlogPostCard>          
          <BlogPostTitle>{blogPost.title}</BlogPostTitle> 
          <SmallTextContainer>
            <ByAuthor>By {blogPost.author}</ByAuthor>
            <PublishedOn>Published On {new Date(blogPost.published_date).toLocaleDateString('en-US')}</PublishedOn>
          </SmallTextContainer>          
          {blogPost.image && <BlogPostImage component="img" src={blogPost.image} alt="Blog Post Image" />}            
          <BlogPostBody className='ql-editor' dangerouslySetInnerHTML={{ __html: blogPost.body }} />     
        </BlogPostCard>
      )}
    </BlogPostContainer>
  );
};

export default BlogPost;
