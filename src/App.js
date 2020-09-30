import React, { useEffect } from 'react';
import './globalStyles/animations.css';
import './globalStyles/bootstrap.css';
import './globalStyles/bootstrap.addons.css';
import './globalStyles/bootstrap.min.css';
import './globalStyles/font-awesome.css';
import './globalStyles/font-awesome4.7.css';
import './globalStyles/main.css';
import './globalStyles/main2.css';
import './globalStyles/main3.css';
import './globalStyles/shop.css';
import './globalStyles/shop2.css';
import './globalStyles/shop3.css';
import './globalStyles/slick.css';
import './globalStyles/slick-theme.css';
import './App.css';

import Routes from './routes'

function App() {
  useEffect(() => {
    // alert("iniciou")
  }, [])
  return (
    <Routes />
  );
}

export default App;
