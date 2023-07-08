import styled  from 'styled-components';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

export const BlogPostContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
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
