import React, { Component, PropTypes } from 'react';
import './menuElement.scss';

class MenuElement extends Component {
   render() {
      return (
         <div className='nav__menu-element'>
            {this.props.children}
         </div>
      );
   }
}

MenuElement.propTypes = {
   children: PropTypes.string
};

export default MenuElement;
