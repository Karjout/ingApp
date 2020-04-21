import React from 'react';
import Navbar from './components/navbar/Navbar';
import Register from './components/forms/register/Register';
import './App.css';
function App() {
  return (
    <div className="App">
        <Navbar/>
        <Register/>
    </div>
  );
}

export default App;
