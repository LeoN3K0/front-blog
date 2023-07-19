import styled from 'styled-components';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import theme from '../themes/theme';

export const ProfileContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(250px, auto) minmax(0, 1fr);
  gap: 20px;
  align-items: flex-start;
  padding: 20px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

export const UserInfoCard = styled(Card)`
  width: 100%;
  max-width: 250px;
  padding: 20px;
`;

export const BlogPostsCard = styled(Card)`
  width: 100%;
  max-width: 1050px;
  padding: 20px;
  margin: auto;
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

export const PublishedStatus = styled(Typography)`
  font-size: 12px;
  color: ${({ theme }) => theme.palette.text.secondary};
`;

export const BlogPostsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

export const CreateBlogPostButton = styled(Button)`
  background-color: ${theme.palette.secondary.main};
  color: ${theme.palette.common.white};

  &:hover {
    background-color: ${theme.palette.secondary.dark};
  }
`;
