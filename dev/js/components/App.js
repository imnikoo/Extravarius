import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FrontPart from '../containers/FrontPart/frontPart';
import BackPart from '../containers/BackPart/backPart';
import './app.scss';
import {
   BrowserRouter as Router
   // Route
} from 'react-router-dom';

class App extends Component {
   constructor(props) {
      super(props);

      this.state = {
         translateIncrement: 10
      };
   }


   componentDidMount() {
      const frontPartDOM = ReactDOM.findDOMNode(this.frontPart);

      this
         .container
         .addEventListener('mousewheel', calculateParallax.bind(this));

      function calculateParallax() {
         let newTranslateAmount = window.scrollY / this.state.translateIncrement;

         if (newTranslateAmount < 0) {
            newTranslateAmount = 0;
         }
         frontPartDOM.style.transform = `translateY(${newTranslateAmount}px)`;
      }
   }


   render() {
      return (
         <Router>
            <div
              className='application-container'
              ref={(container) => {
                 this.container = container;
              }}
            >
               <FrontPart
                 ref={(frontPart) => {
                    this.frontPart = frontPart;
                 }}
               />
               <BackPart/>
            </div>
         </Router>
      );
   }
}

export default App;
