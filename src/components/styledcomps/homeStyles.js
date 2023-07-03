import { styled } from '@mui/material/styles';

export const HomeContainer = styled('div')`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

export const CardContainer = styled('div')`
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

export const RecentPostTitle = styled('h2')`
  margin: 0 0 16px;
`;

export const RecentPostContent = styled('p')`
  margin: 0;
  color: ${({ theme }) => theme.palette.text.secondary};
`;

export const RecentPostsList = styled('ul')`
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const ListTitle = styled('h3')`
  margin-bottom: 8px;
`;

export const ListSeparator = styled('hr')`
  margin: 16px 0;
  border: none;
  border-top: 1px solid ${({ theme }) => theme.palette.grey[300]};
`;

export const RecentPostsListItem = styled('li')`
  margin-bottom: 8px;
`;

export const RecentPostsListItemLink = styled('a')`
  color: ${({ theme }) => theme.palette.text.secondary};
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.palette.secondary.main};
  }
`;