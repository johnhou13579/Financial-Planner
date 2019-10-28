import React from 'react';
import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import About from './components/About';
import Shop from './components/Shop';
import ItemDetail from './components/ItemDetail';
import Lifestyle from './components/Lifestyle';

//importing Browserrouter from React-Router-dom
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/shop/:id" component={ItemDetail} />
          <Route path="/lifestyle" exact component={Lifestyle} />
          <Route path="/career" exact component={Shop} />
        </Switch>

      </div>

    </Router>

  );
}

export default App;
