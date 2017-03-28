import React, { Component } from 'react';
import NavContainer from './NavContainer/navContainer';
import Search from './Search/search';
require('./header.scss');

class Header extends Component {
    render() {
        return (
            <div className="header">
                <Search />
                <NavContainer />
            </div>
        );
    }
}

export default Header;