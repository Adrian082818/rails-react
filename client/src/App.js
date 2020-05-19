import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Footer from './components/Footer'
import NewGame from './containers/NewGame'
import GameShow from './containers/GameShow'
import GamePage from './containers/GamePage'
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {

    return (
     <Router>
      <div className="App">
      <h1><span role="img" aria-label="game controller">🎮</span> React Games <span role="img" aria-label="joy stick">🕹️</span></h1>
       <NavBar />
       <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/new' component={NewGame} />
        <Route exact path='/games' component={GamePage} /> 
        <Route path='/games/:gameId' component={GameShow} />
       </Switch>
       <Footer />
      </div>
     </Router>
   );
  }
}

export default App;
