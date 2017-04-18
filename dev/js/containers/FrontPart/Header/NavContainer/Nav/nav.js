import React, { Component } from 'react';
require('./nav.scss');

class Nav extends Component {
   render() {
      return (
         <div className='nav'>
            <div className='nav__menu-element'>
                ГОЛОВНА</div>
            <div className='nav__menu-element'>
                ЕКСПОЗИЦІЯ ТА ШОУ</div>
            <div className='nav__menu-element'>
                НОВИНИ</div>
            <div className='nav__menu-element'>
                ОСВІТНІ ПРОГРАММИ</div>
            <div className='nav__menu-element'>
                ОРГАНІЗАЦІЯ СВЯТ</div>
            <div className='nav__menu-element'>
                ПРО НАС</div>
         </div>
      );
   }
}

export default Nav;
