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

function App() {
  const { isLoggedIn } = useAuth();

  return (
    <div>
      <BrowserRouter> 
        <ThemeProvider theme={theme}>   
        <NavBar/>  
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/blogs" element={<Blogs/>} />
          <Route path="/login" element={<Login/>} />
          {isLoggedIn && (
            <>
              <Route path="/createblog" element={<CreateBlog/>} />
              <Route path="/editblog" element={<EditBlog/>} />
            </>
          )}
          <Route path="/blogpost" element={<BlogPost/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/*" element={<NotFoundPage/>} />
        </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;