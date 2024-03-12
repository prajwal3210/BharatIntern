import React from "react";
import Signup from "../src/components/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import PostList from "./components/PostList";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/PostList" element={<PostList />} />
          <Route path="/" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
