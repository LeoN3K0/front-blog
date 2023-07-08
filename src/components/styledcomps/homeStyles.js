import styled from 'styled-components';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Link from '@mui/material/Link';

export const HomeContainer = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;

export const CardContainer = styled(Card)`
  display: flex;
  align-items: flex-start;
  padding: 16px;
  margin: 0 16px;
  border: 1px solid ${({ theme }) => theme.palette.grey[300]};
  border-radius: 4px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  background-color: ${({ theme }) => theme.palette.common.white};
`;

export const LeftSection = styled('div')`
  flex: 1;
`;

export const RightSection = styled('div')`
  margin-left: 16px;
  padding-left: 16px;
  border-left: 1px solid ${({ theme }) => theme.palette.grey[300]};
`;

export const RecentPostTitle = styled(Typography)`
  margin: 0 0 16px;
`;

export const RecentPostContent = styled(Typography)`
  margin: 0;
  color: ${({ theme }) => theme.palette.text.secondary};
`;

export const RecentPostsList = styled(List)`
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const ListTitle = styled(Typography)`
  margin-bottom: 8px;
`;

export const ListSeparator = styled(Divider)`
  margin: 16px 0;
`;

export const RecentPostsListItem = styled(ListItem)`
  margin-bottom: 8px;
`;

export const RecentPostsListItemLink = styled(Link)`
  color: ${({ theme }) => theme.palette.text.secondary};
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.palette.secondary.main};
  }
`;

export const ButtonContainer = styled('div')`
  display: flex;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: 16px;
`;

export const CreateBlogPostButton = styled(Button)`
  background-color: ${({ theme }) => theme.palette.secondary.main};
  color: ${({ theme }) => theme.palette.common.white};

  &:hover {
    background-color: ${({ theme }) => theme.palette.secondary.dark};
  }
`;