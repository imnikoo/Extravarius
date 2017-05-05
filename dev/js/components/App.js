import React, { Component } from 'react';
// import FrontPart from '../containers/FrontPart/frontPart';
import BackPart from '../containers/BackPart/backPart';
import './app.scss';
import {
   BrowserRouter as Router
   // Route
} from 'react-router-dom';

class App extends Component {
   render() {
      return (
         <Router>
            <div className='application-container'>
               <BackPart/>
            </div>
         </Router>
      );
   }
}

export default App;
