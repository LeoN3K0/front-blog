import styled from 'styled-components';

export const BlogPostContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const BlogPostCard = styled.div`
  width: 80%;
  max-width: 600px;
  padding: 40px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;

export const BlogPostTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const BlogPostBody = styled.p`
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 20px;
`;

export const BlogPostImage = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
  margin-bottom: 20px;
`;
