import React, { Component } from 'react';
import Nav from './Nav/nav';

require('./navContainer.scss');

class NavContainer extends Component {
    render() {
        return (
            <div className="nav-container">
                <div className="nav-container__image">
                    Extravaruis image
                </div>
                <div className="nav-container__title">
                    Extravarius
                </div>
                <Nav/>
                <div className="nav-container__tickets-button">
                    Tickets
                </div>
            </div>
        );
    }
}

export default NavContainer;