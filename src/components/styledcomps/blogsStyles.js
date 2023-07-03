import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';

export const MainCard = styled(Card)`
  && {
    width: 90%;
    margin: 40px auto 0; /* Added top spacing of 40px */
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const BlogsContainer = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
`;

export const SearchBar = styled('input')`
  width: 300px;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.palette.grey[300]};
  margin-bottom: 16px;
`;

export const BlogList = styled('ul')`
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const BlogListItem = styled('li')`
  margin-bottom: 8px;
`;

export const BlogTitle = styled('h2')`
  margin: 0;
`;

export const BlogDate = styled('p')`
  margin: 0;
  color: ${({ theme }) => theme.palette.text.secondary};
`;
