import styled from 'styled-components';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

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

export const SearchBar = styled(TextField)`
  width: 300px;
  margin-bottom: 16px;
`;

export const BlogList = styled(List)`
  padding: 0;
  margin: 0;
`;

export const BlogListItem = styled(ListItem)`
  margin-bottom: 8px;
`;

export const BlogTitle = styled(ListItemText)`
  margin: 0;
`;

export const BlogDate = styled(Typography)`
  margin: 0;
  color: ${({ theme }) => theme.palette.text.secondary};
`;
