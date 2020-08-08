import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import RouteComponent from './Components/RouteComponent';

function App() {
  return (
    <BrowserRouter>
      <RouteComponent />
    </BrowserRouter>
  );
}

export default App;
