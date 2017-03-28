import React, { Component } from 'react';
require('./nav.scss');

class Nav extends Component {
    render() {
        return (
            <div className="nav">
                <div className="nav__menu-element"></div>
                <div className="nav__menu-element"></div>
                <div className="nav__menu-element"></div>
                <div className="nav__menu-element"></div>
                <div className="nav__menu-element"></div>
                <div className="nav__menu-element"></div>
                <div className="nav__menu-element"></div>
            </div>
        );
    }
}

export default Nav;