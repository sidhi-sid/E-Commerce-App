import React from 'react';
import './App.css';
import View from './components/View'
import Card1 from './components/Card1'
import {BrowserRouter as Router, Route, BrowserRouter, Switch} from 'react-router-dom';
import Form from './components/Form'
import Report from './components/Report'
import Delete from './components/Delete'
function App() {
  
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <View/>
      </Route>
      <Route path="/aded">
        <Form/>
      </Route>
      <Route path="/check">
        <Report/>
      </Route>
      <Route path="/delete">
        <Delete/>
      </Route>
    </Switch>
    </BrowserRouter>
  );
  
  
}

export default App;
