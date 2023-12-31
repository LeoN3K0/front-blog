import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import NavBar from "./NavBar";
import { ThemeProvider } from "@mui/material";
import theme from '../themes/theme';
import Home from '../pages/Home';
import NotFoundPage from "../pages/404ErrorPage";
import Login from "../pages/Login";
import Blogs from "../pages/Blogs";
import CreateBlog from "../pages/CreateBlog";
import EditBlog from "../pages/EditBlog";
import BlogPost from "../pages/BlogPost";
import Profile from "../pages/Profile";
import { useAuth } from "../AuthContext";
import Footer from "./Footer";
import { StyledAppContainer } from "../styles/appStyles";

function App() {
  const { isLoggedIn } = useAuth();

  return (
    <div>
      <HashRouter> 
        <ThemeProvider theme={theme}>  
        <StyledAppContainer> 
        <NavBar/>  
        <Routes>
          <Route path="/front-blog/" element={<Home/>} />
          <Route path="/front-blog/blogs" element={<Blogs/>} />
          <Route path="/front-blog/login" element={<Login/>} />
          {isLoggedIn && (
            <>
              <Route path="/front-blog/createblog" element={<CreateBlog/>} />
              <Route path="/front-blog/editblog/:id" element={<EditBlog/>} />
            </>
          )}
          <Route path="/front-blog/blogs/:id" element={<BlogPost/>} />
          <Route path="/front-blog/profile" element={<Profile/>} />
          <Route path="/front-blog/*" element={<NotFoundPage/>} />
        </Routes>
        <Footer />
        </StyledAppContainer>
        </ThemeProvider>
      </HashRouter>
    </div>
  );
}

export default App; 