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

function App() {
  return (
    <div>
      <BrowserRouter> 
        <ThemeProvider theme={theme}>   
        <NavBar/>  
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/blogs" element={<Blogs/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/createblog" element={<CreateBlog/>} />
          <Route path="/*" element={<NotFoundPage/>} />
        </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;