import React from 'react';
import Chat from '../components/chat';
import Home from '../components/home';

import {
    BrowserRouter as Router,Route,
  } from "react-router-dom";

  class AppRouter extends React.Component
  {
      render()
      {
          return(
            <Router>
                <Route exact path = '/home' component = {Home} />
                <Route path = '/chat' component = {Chat} />
            </Router>  
          ) 
      }
  }

  export default AppRouter;