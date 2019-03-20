import React from 'react';
import { 
  BrowserRouter as Router, 
  Route 
} from 'react-router-dom';

import Landing from './Landing';
import DataView from './DataView';

const App = () => (
    <Router>
      <Route exact={true} path="/" render={() => (            
        <Landing />
      )} />
      <Route path="/new" render={() => (
        <DataView /> 
      )} />
      <Route path="/open" render={() => (
        ''
      )}  />
    </Router>
);

export default App;
