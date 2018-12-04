import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

//pages
import Board from './pages/board/board';
import Optimum from './pages/optimum/optimum'

// react router
const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path='/' component={ Optimum }/>
        <Route exact path='/board/:title' component={ Board }/>
      </Switch>
    </div>
 </Router>
);

export default App;
