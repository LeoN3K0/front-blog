import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import NavBar from "./NavBar";
import { ThemeProvider } from "@mui/material";
import theme from '../themes/theme';
import Home from './Home';
import NotFoundPage from "./404ErrorPage";
import Login from "./Login";
import Blogs from "./Blogs";
import CreateBlog from "./CreateBlog";
import EditBlog from "./EditBlog";
import BlogPost from "./BlogPost";
import Profile from "./Profile";
import { useAuth } from "../AuthContext";
import Footer from "./Footer";
import { StyledAppContainer } from "./styledcomps/appStyles";

function App() {
  const { isLoggedIn } = useAuth();

  return (
    <div>
      <BrowserRouter> 
        <ThemeProvider theme={theme}>  
        <StyledAppContainer> 
        <NavBar/>  
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/blogs" element={<Blogs/>} />
          <Route path="/login" element={<Login/>} />
          {isLoggedIn && (
            <>
              <Route path="/createblog" element={<CreateBlog/>} />
              <Route path="/editblog/:id" element={<EditBlog/>} />
            </>
          )}
          <Route path="/blogs/:id" element={<BlogPost/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/*" element={<NotFoundPage/>} />
        </Routes>
        <Footer />
        </StyledAppContainer>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App; 