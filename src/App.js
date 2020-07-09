import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Component/Header';
import Introduction from './Component/Introduction';
import Features from './Component/Features';
import Contact from './Component/Contact';
import Footer from './Component/Footer';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCode, faChartBar} from '@fortawesome/free-solid-svg-icons';

library.add(fab, faCode, faChartBar, faFacebook, faLinkedin);
function App() {
  return (
    <div className="App">
      <Header/>
      <Introduction />
      <Features/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
