import React, { Component } from 'react';
import Nav from './Nav/nav';
import './navContainer.scss';
const logo = require('../../../../../extras/logo-compressor.png');


class NavContainer extends Component {
   render() {
      return (
         <div className='nav-container'>
            <div className='image-container'>
               <img className='image-container__image' src={logo} alt='Лого' />
            </div>
            <div className='title-container'>
               <span className='title-container__title'>
                  Екстраваріус
               </span>
               <span className='title-container__description'>
                  Музей популярної науки і техніки
               </span>
            </div>
            <Nav />
            <div className='nav-container__tickets-button'>
               КВИТКИ
            </div>
         </div>
      );
   }
}

export default NavContainer;
