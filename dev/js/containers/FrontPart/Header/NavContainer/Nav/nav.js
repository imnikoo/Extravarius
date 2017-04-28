import React, { Component } from 'react';
import MenuElement from './menuElement';
import Dropdown from '../../../../../components/dropdown/dropdown';

import  _map from 'lodash/map';
import './nav.scss';

class Nav extends Component {
   constructor(props) {
      super(props);

      this.state = {
         menus: [
            {
               title: 'ГОЛОВНА'
            },
            {
               title: 'ЕКСПОЗИЦІЯ ТА ШОУ',
               items: ['ШОУ В МУЗЕЇ', 'ПОДІЇ ТА ЛЕКЦІЇ', 'ВИЇЗДНІ ШОУ', '3D ТУР']
            },
            {
               title: 'НОВИНИ'
            }, {
               title: 'ОСВІТНІ ПРОГРАММИ'
            }, {
               title: 'ОРГАНІЗАЦІЯ СВЯТ'
            }, {
               title: 'ПРО НАС'
            }
         ]
      };
   }

   isDropdown(menu) {
      return menu.items && menu.items.length;
   }

   rendedMenuElement(menu, idx) {
      if (this.isDropdown(menu)) {
         return (
            <MenuElement key={idx}>
               <Dropdown title={menu.title} items={menu.items} />
            </MenuElement>
         );
      }
      return (<MenuElement key={idx}>
         {menu.title}
      </MenuElement>);
   }


   render() {
      return (
         <div className='nav'>
            {_map(this.state.menus, (menu, idx) => {
               return this.rendedMenuElement(menu, idx);
            })}
         </div>
      );
   }
}

export default Nav;
