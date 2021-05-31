import React, { useState, useEffect } from 'react'
import { HashRouter, Route, Switch } from "react-router-dom";
// Styles
import './App.css'
// Importing the Pags
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Rooms } from './pages/Rooms'
import { Error } from './pages/Error'
import { Offers } from './pages/Offers'
// Importing the components
import { Header } from './components/Header'
import { HamburgerMenu } from './components/HamburgerMenu.js'
// Icons 
import CopyrightIcon from '@material-ui/icons/Copyright';

function App() {

  const [hamburger, setHamburger] = useState(false) // This is only the button on the headaer
  const [hamburgerOpen, setHamburgerOpen] = useState(false) // This is the actual div for the page, 

  const [width, setWidth] = useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    if (width <= 768) {
      setHamburger(true)
    } else { setHamburger(false) }
  }, [width])

  return (
    <HashRouter basename="/">
      <Header hamburger={hamburger} setHamburgerOpen={setHamburgerOpen} />
      {hamburgerOpen ? <div><HamburgerMenu setHamburgerOpen={setHamburgerOpen} /></div> : ''}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/rooms" component={Rooms} />
        <Route path="/about" component={About} />
        <Route path="/offers" component={Offers} />
        <Route path="" component={Error} />
      </Switch>
      <footer>
        <CopyrightIcon /> 2021 <span className="blue">Roof Over My Head</span>  All rights reserved.
      </footer>
    </HashRouter>
  );
}

export default App;
