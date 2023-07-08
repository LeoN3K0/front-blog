import styled from 'styled-components';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import theme from '../../themes/theme';

export const ProfileContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 20px;
`;

export const UserInfoCard = styled(Card)`
  width: 300px;
  margin-right: 20px;
  padding: 20px;
`;

export const BlogPostsCard = styled(Card)`
  flex: 1;
  padding: 20px;
  position: relative;
`;

export const SectionTitle = styled(Typography)`
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: bold;
`;

export const BlogPostItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const BlogPostTitle = styled(Typography)`
  margin-right: 10px;
  font-size: 18px;
  font-weight: bold;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const CreateBlogPostButton = styled(Button)`
  background-color: ${theme.palette.secondary.main};
  color: ${theme.palette.common.white};

  &:hover {
    background-color: ${theme.palette.secondary.dark};
  }
`;

export const BlogPostsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;