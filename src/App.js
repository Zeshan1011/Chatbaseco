import './App.css';
import React from 'react';
import Home from './pages/Home';
import SignUpPage from './pages/SignUpPage';
import Affiliate from './pages/Affiliate';
import Pricing from './pages/Pricing';
import Guide from './pages/Guide';
function App() { 
  return (
   
    <div>
      <Home />
      <SignUpPage />
      <Affiliate />
      <Pricing />
      <Guide />
    </div>
  )
}
export default App;

