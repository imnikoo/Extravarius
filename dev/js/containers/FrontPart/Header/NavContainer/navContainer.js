import React, { Component } from 'react';
import Nav from './Nav/nav';
require('./navContainer.scss');

class NavContainer extends Component {
    render() {
        return (
            <div className="nav-container">
                <div className="image-container">
                    <img className="image-container__image" src="http://static.wixstatic.com/media/84a04d_ebad71d530224c66b58bb135d60b5839~mv2.png_srz_777_759_85_22_0.50_1.20_0.00_png_srz" alt="Лого"/>
                </div>
                <div className="title-container">
                    <span className="title-container__title">
                        Екстраваріус
                    </span> 
                    <span  className="title-container__description">
                        Музей популярної науки і техніки
                    </span>
                </div>
                <Nav/>
                <div className="nav-container__tickets-button">
                    КВИТКИ
                </div>
            </div>
        );
    }
}

export default NavContainer;