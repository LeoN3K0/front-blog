import React, { useState, useEffect } from 'react';
import { Toolbar, Hidden } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';
import { useAuth } from '../AuthContext';

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
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const [userName, setUserName] = useState('');

  const handleDrawerOpen = () => {
    setIsOpen(true);
  };

  const handleDrawerClose = () => {
    setIsOpen(false);
  };

  const handleLogout = () => {
    // Clear the token stored in the cookie
    Cookies.remove('jwt', { sameSite: 'none', secure: true});
    // Perform the logout logic here
    setIsLoggedIn(false);
  };

  useEffect(() => {
    const checkLoginStatus = async () => {
      const token = Cookies.get('jwt');
  
      if (token && isLoggedIn) { // Check if user is logged in
        try {
          const response = await axios.post(
            'http://localhost:3000/verifyToken',
            { token },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          setUserName(response.data.username);
          setIsLoggedIn(true);
        } catch (error) {
          console.log(error);
          setIsLoggedIn(false);
          setUserName('');
        }
      } else {
        setIsLoggedIn(false);
        setUserName('');
      }
    };
  
    checkLoginStatus();
  }, [isLoggedIn, setIsLoggedIn]);

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
              {isLoggedIn ? (
                <>
                  <StyledLink to="/profile">{userName}</StyledLink>
                  <StyledLink to="/" onClick={handleLogout}>Logout</StyledLink>
                </>
              ) : (
                <StyledLink to="/login">Login</StyledLink>
              )}
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
                {isLoggedIn ? (
                  <>
                    <StyledListItem component={Link} to="/profile" onClick={handleDrawerClose}>
                      <StyledListItemText primary={userName} />
                    </StyledListItem>
                    <StyledListItem component={Link} to="/" onClick={handleLogout}>
                      <StyledListItemText primary="Logout" />
                    </StyledListItem>
                  </>
                ) : (
                  <StyledListItem component={Link} to="/login" onClick={handleDrawerClose}>
                    <StyledListItemText primary="Login" />
                  </StyledListItem>
                )}
              </StyledList>
            </StyledDrawerContent>
          </StyledDrawer>
        </Toolbar>
      </StyledAppBar>
    </>
  );  
};

export default Navbar;
