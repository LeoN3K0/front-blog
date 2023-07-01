import React, { useState } from 'react';
import styled from 'styled-components';
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, Hidden } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDrawerOpen = () => {
    setIsOpen(true);
  };

  const handleDrawerClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <StyledAppBar position="static">
        <Toolbar>
          <StyledLogoLink to="/">
            <StyledLogoText>Blog-app</StyledLogoText>
          </StyledLogoLink>
          <Hidden mdUp>
            <StyledNavLinks>
              <StyledIconButton edge="end" color="inherit" aria-label="menu" onClick={handleDrawerOpen}>
                <MenuIcon />
              </StyledIconButton>
            </StyledNavLinks>
          </Hidden>
          <Hidden smDown>
            <StyledNavLinks>
              <StyledLink to="/">Home</StyledLink>
              <StyledLink to="/blogs">Blogs</StyledLink>
              <StyledLink to="/login">Login</StyledLink>
            </StyledNavLinks>
          </Hidden>
          <StyledDrawer
            anchor="right"
            open={isOpen}
            onClose={handleDrawerClose}
          >
            <StyledDrawerContent>
              <StyledCloseButton onClick={handleDrawerClose}>
                <CloseIcon />
              </StyledCloseButton>
              <StyledList>
                <StyledListItem component={Link} to="/" onClick={handleDrawerClose}>
                  <StyledListItemText primary="Home" />
                </StyledListItem>
                <StyledListItem component={Link} to="/blogs" onClick={handleDrawerClose}>
                  <StyledListItemText primary="Blogs" />
                </StyledListItem>
                <StyledListItem component={Link} to="/login" onClick={handleDrawerClose}>
                  <StyledListItemText primary="Login" />
                </StyledListItem>
              </StyledList>
            </StyledDrawerContent>
          </StyledDrawer>
        </Toolbar>
      </StyledAppBar>
    </>
  );
};

const StyledAppBar = styled(AppBar)`
  background-color: #333;
`;

const StyledLogoLink = styled(Link)`
  text-decoration: none;
  color: #fff;
`;

const StyledLogoText = styled.h1`
  margin: 0;
  font-size: 20px;
  font-weight: bold;
`;

const StyledNavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  &:last-child {
    margin-left: auto;
  }
`;

const StyledIconButton = styled(IconButton)`
  display: none;

  @media (max-width: 600px) {
    display: block;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  &:hover {
    color: #ccc;
  }
`;

const StyledDrawer = styled(Drawer)`
  & .MuiDrawer-paper {
    background-color: #333;
    color: #fff;
  }
`;

const StyledDrawerContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const StyledCloseButton = styled(IconButton)`
  align-self: flex-end;
  color: #fff;
`;

const StyledList = styled(List)`
  width: 240px;
`;

const StyledListItem = styled(ListItem)`
  color: #fff;
  &:hover {
    background-color: #444;
  }
`;

const StyledListItemText = styled(ListItemText)`
  .MuiTypography-root {
    color: inherit;
  }
`;

export default Navbar;
