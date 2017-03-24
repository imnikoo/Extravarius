import React, { Component } from 'react';
require('./frontPart.scss');

class FrontPart extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <ContentBox></ContentBox>
            </div>
        );
    }
}

export default FrontPart;