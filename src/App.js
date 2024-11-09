// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Auth from './components/Auth';
import HomePage from './components/HomePage';
import PostFeed from './components/PostFeed';
import PostDetail from './components/PostDetail';
import UploadPost from './components/UploadPost';
import UserPage from './components/UserPage';
import Board from './components/Board';


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/posts" element={<PostFeed />} />
          <Route path="/posts/:postId" element={<PostDetail />} />
          <Route path="/upload" element={<UploadPost />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/board" element={<Board />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;