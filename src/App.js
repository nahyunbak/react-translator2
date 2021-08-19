import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import MainPage from './pages/MainPage';



function App() {
  
  return (
    <>
    <Route component={MainPage} path="/" exact />

    </>
  );
}

export default App;
