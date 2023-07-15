import styled from 'styled-components';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';

export const BlogPostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;
  min-height: calc(100vh - 80px);
`;

export const BlogPostContent = styled.div`
  width: 80%;
  max-width: 600px;
  margin: 20px;
`;

export const BlogPostTitle = styled(Typography)`
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const EditIconStyled = styled(EditIcon)`
  margin-left: 8px;
  cursor: pointer;
  color: ${(props) => props.theme.palette.secondary.main};
  transition: color 0.3s;

  &:hover {
    color: ${(props) => props.theme.palette.secondary.dark};
  }
`;

export const BlogPostBody = styled(Typography)`
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 20px;

  img {
    max-width: 100%;
    max-height: 300px;
    object-fit: cover;
  }
`;

export const SmallTextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  & > * {
    margin-right: 10px;
  }
`;

export const ByAuthor = styled(Typography)`
  font-size: 10px;
  padding: 2px;
`;

export const PublishedOn = styled(Typography)`
  font-size: 10px;
  padding: 2px;
`;

export const BlogPostImage = styled.img`
  display: block;
  margin: 0 auto;
  max-width: 100%;
  height: 300px;
  margin-bottom: 20px;
`;
