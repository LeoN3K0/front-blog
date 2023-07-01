import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import NavBar from "./NavBar";

function App() {
  return (
    <div>
      <BrowserRouter>    
      <NavBar/>  
      <Routes>
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;