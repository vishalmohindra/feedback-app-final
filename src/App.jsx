import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';

import Header from './Components/Header';
import FeedbackForm from './Components/FeedbackForm';
import FeedbackStats from './Components/FeedbackStats';
import AboutPage from './Pages/AboutPage';
import Post from './Components/Post';
import AboutIconLink from './Components/AboutIconLink';
import { FeedbackProvider } from './Contexts/FeedbackContext';

import Card from './Components/shared/Card';

import './App.css';
import './index.css';
import FeedbackList from './Components/FeedBackList';

function App() {
  return (
    <FeedbackProvider>
      <Router basename="/feedback-app">
        <Header />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackList />
                  <FeedbackStats />
                </>
              }
            />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/post/*" element={<Post />} />
          </Routes>
          <Card>
            <div className="nav-links">
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
              Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
              About
            </NavLink>
            </div>
          </Card>
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
