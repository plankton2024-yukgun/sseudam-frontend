// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import PostFeed from './components/PostFeed';
import UserPage from './components/UserPage';
import Board from './components/Board';

function App() {
  return (
    <Router>
      <div>
        <Navbar /> {/* Navbar에 로고 포함 */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/posts" element={<PostFeed />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/board" element={<Board />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

