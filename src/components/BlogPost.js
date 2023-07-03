import React from 'react';
import { BlogPostContainer, BlogPostCard, BlogPostTitle, BlogPostBody, BlogPostImage } from './styledcomps/blogPostStyles';

const BlogPost = () => {
  const blogPost = {
    title: 'Example Blog Post',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lacinia nisi. Donec nec ligula leo. Vestibulum rutrum imperdiet neque, vitae blandit enim fringilla sit amet. In lobortis turpis ut dolor feugiat, in rhoncus mauris lobortis. Sed et risus vitae mauris vestibulum facilisis. Proin et purus augue. Integer in placerat sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec auctor, felis et pharetra viverra, risus nibh pulvinar sem, ac finibus sem est ac dui.',
    images: [
      'https://example.com/image1.jpg',
      'https://example.com/image2.jpg',
      'https://example.com/image3.jpg',
    ],
  };

  return (
    <BlogPostContainer>
      <BlogPostCard>
        <BlogPostTitle>{blogPost.title}</BlogPostTitle>
        <BlogPostBody>{blogPost.body}</BlogPostBody>
        {blogPost.images.map((image, index) => (
          <BlogPostImage key={index} src={image} alt={`Image ${index + 1}`} />
        ))}
      </BlogPostCard>
    </BlogPostContainer>
  );
};

export default BlogPost;
