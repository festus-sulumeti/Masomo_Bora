import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import 'Routes' instead of 'Switch'

import Detail from './Components/Detail';
import Signup from './Components/Signup';
import Signin from './Components/Signin';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes> 
          <Route path="/" element={<Detail />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Signin" element={<Signin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
