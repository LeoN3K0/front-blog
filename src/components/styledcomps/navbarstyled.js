import styled from 'styled-components';
import { AppBar, IconButton, Drawer, List, ListItem, ListItemText} from '@mui/material';
import { Link } from 'react-router-dom';

export const StyledAppBar = styled(AppBar)`
  background-color: ${props => props.theme.palette.primary.main};
`;

export const StyledLogoLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.palette.common.white};
`;

export const StyledLogoText = styled.h1`
  margin: 0;
  font-size: 20px;
  font-weight: bold;
`;

export const StyledNavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  &:last-child {
    margin-left: auto;
  }
`;

export const StyledIconButton = styled(IconButton)`
  display: none;

  @media (max-width: 600px) {
    display: block;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.palette.common.white};
  &:hover {
    color: #ccc;
  }
`;

export const StyledDrawer = styled(Drawer)`
  & .MuiDrawer-paper {
    background-color: ${props => props.theme.palette.primary.main};
    color: ${props => props.theme.palette.common.white};
  }
`;

export const StyledDrawerContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const StyledCloseButton = styled(IconButton)`
  align-self: flex-end;
  color: ${props => props.theme.palette.common.white};
`;

export const StyledList = styled(List)`
  width: 240px;
`;

export const StyledListItem = styled(ListItem)`
  color: ${props => props.theme.palette.common.white};
  &:hover {
    background-color: ${props => props.theme.palette.secondary.main};
  }
`;

export const StyledListItemText = styled(ListItemText)`
  .MuiTypography-root {
    color: inherit;
  }
`;

export const StyledUserNameLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.palette.common.white};
  &:hover {
    color: #ccc;
  }
`;

