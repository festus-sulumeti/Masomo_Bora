// App.js

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 

import Detail from './Components/Detail';
import Signup from './Components/Signup';
import Signin from './Components/Signin';
import Home from './Components/Home/Home';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes> 
          <Route path="/" element={<Detail />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Signin" element={<Signin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
