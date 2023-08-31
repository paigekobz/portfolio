import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import About from './About';
//import Projects from './Projects';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={About} />
      </Switch>
    </Router>
  );
}

export default App;

