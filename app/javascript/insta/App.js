import React from 'react';
// import './App.css';
import MessageList from './components/chat/messages_list'
import Profile from './components/social/profile'
import Header from './components/_reusable/header'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path='/' exact component={Profile} />
          <Route path='/posts' exact component={Profile} />
          <Route path='/messages' exact component={MessageList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
