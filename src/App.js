import React from 'react';
import Main from './pages'
import './css/App.css';
import { Switch, Route } from 'react-router-dom'
import Login from './pages/Login'

function App() {
  return (
    <React.Fragment>
      <Switch>
       
        <Route path='/login' component={Login}/>
        <Route path='/' component={Main}/>
      </Switch>
    </React.Fragment>
  );
}

export default App;
