import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import { Home } from './Pages/Home';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;