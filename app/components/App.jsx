import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Popular from './Popular.jsx';
import Nav from './Nav.jsx';
import Home from './Home.jsx';
import Battle from './Battle.jsx';

const Router = BrowserRouter;

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Nav />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/battle' component={Battle} />
            <Route path='/popular' component={Popular} />
            <Route render={ () => {
                return <p> Not Found </p>
              }} 
            />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;