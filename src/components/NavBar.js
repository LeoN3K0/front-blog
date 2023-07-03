import React, { useState } from 'react';
import { Toolbar, Hidden } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import {
  StyledAppBar,
  StyledLogoLink,
  StyledLogoText,
  StyledNavLinks,
  StyledIconButton,
  StyledLink,
  StyledDrawer,
  StyledDrawerContent,
  StyledCloseButton,
  StyledList,
  StyledListItem,
  StyledListItemText
} from './styledcomps/navbarstyled';

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

export default Navbar;
