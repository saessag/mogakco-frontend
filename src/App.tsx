import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import appRoutes from './pages';

// TODO: need combine Provider
function App() {
  return <BrowserRouter basename='/'>{appRoutes()}</BrowserRouter>;
}

export default App;
