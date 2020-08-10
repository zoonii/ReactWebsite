import React from 'react';

import './App.css'
import './Components/Navbar.css'
import './Components/Banner.css'

import Navbar from './Components/Navbar';
import Banner from './Components/Banner';

function App() {
  return (
    <body className="App">
      <Navbar />
      <Banner />
    </body>
  );
}

export default App;
