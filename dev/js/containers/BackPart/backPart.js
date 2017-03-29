import React, { Component } from 'react';
require('./backPart.scss');

class BackPart extends Component {
    render() {
        return (
            <div className="back-part">
                <img className="back-part__difussion" src="https://s-media-cache-ak0.pinimg.com/originals/07/64/86/076486333becfb81dac8af080e46af60.jpg" alt=""/>
            </div>
        );
    }
}

export default BackPart;