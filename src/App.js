import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


// Pages and Components //
import Header from './Components/Header';
import Home from './Components/Pages/Home';
import UserGuide from './Components/Pages/UserGuide';
// import Datasets from './Components/Pages/Datasets';
import Footer from './Components/Footer';



function App() {
  return (
    <>
      <Router>
        < Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/guide" exact component={UserGuide} />
        </Switch>

        <Footer />
      </Router>

    </>
  );
}

export default App;
