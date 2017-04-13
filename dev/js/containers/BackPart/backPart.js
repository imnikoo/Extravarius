import React, { Component } from 'react';
require('./backPart.scss');
var background = require("../../../extras/076486333becfb81dac8af080e46af60-cropped-compressor.jpg");

class BackPart extends Component {
    render() {
        return (
            <div className="back-part">
                <img className="back-part__difussion" src={background}/>
            </div>
        );
    }
}

export default BackPart;