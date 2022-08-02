import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
// Components
import Header from './components/Header';
// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

import './App.css';

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Header />
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/Register' element={<Register/>}></Route>
          </Routes>
        </div>
      </Router>
      <ToastContainer/>
    </>
    
  );
}

export default App;
