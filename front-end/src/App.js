import "./App.css";
import Nav from "./component/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from './component/SignUp';
import { useState } from "react";

function App() {
  
  
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/profile" element={<h1>Profile component</h1>} />
          <Route path="/signup"element={<SignUp />} />
         console.log("open");
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
