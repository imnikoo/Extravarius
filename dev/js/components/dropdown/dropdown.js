import React, { Component, PropTypes } from 'react';
import _map from 'lodash/map';
import './dropdown.scss';

class Dropdown extends Component {
   constructor(props) {
      super(props);

      this.state = {
         items: props.items
      };
   }

   render() {
      return (
         <div className='dropdown-container'>
            <div className='dropdown'>
               <div className='title'>{this.props.title}</div>
            </div>
            <div className='items'>
               {_map(this.state.items, (item, idx) => {
                  return (
                     <div className='item' index={idx} href='#'>{item}</div>);
               })}
            </div>
         </div>

      );
   }
}

Dropdown.propTypes = {
   title: PropTypes.string,
   items: PropTypes.array
};

export default Dropdown;
