import styled from 'styled-components';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

export const BlogPostContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start; /* Align items to the top */
  padding-top: 80px; /* Adjust the value according to your nav bar height */
  min-height: calc(100vh - 80px); /* Adjust the value according to your nav bar height */
`;

export const BlogPostCard = styled(Card)`
  width: 80%;
  max-width: 600px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;

export const BlogPostCardContent = styled(CardContent)`
  padding: 40px;
`;

export const BlogPostTitle = styled(Typography)`
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const BlogPostBody = styled(Typography)`
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 20px;
`;

export const BlogPostImage = styled(CardMedia)`
  display: block;
  max-width: 100%;
  height: auto;
  margin-bottom: 20px;
`;

export const SmallTextContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const ByAuthor = styled(Typography)`
  font-size: 10px;
  padding: 2px;
`;

export const PublishedOn = styled(Typography)`
  font-size: 10px;
  padding: 2px;
  margin-left: 10px;
`;
