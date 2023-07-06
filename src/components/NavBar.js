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
  const { isLoggedIn, setIsLoggedIn, userName, setUserName } = useAuth();

  const handleDrawerOpen = () => {
    setIsOpen(true);
  };

  const handleDrawerClose = () => {
    setIsOpen(false);
  };

  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:3000/logout');

      // Clear the token stored in the cookie
      Cookies.remove('jwt');

      setIsLoggedIn(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const token = Cookies.get('jwt');
        if (token) {
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
        } else {
          setIsLoggedIn(false);
        }
      } catch (error) {
        console.log(error);
        setIsLoggedIn(false);
      }
    };

    fetchUserName();
  }, [setIsLoggedIn, setUserName]);

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
