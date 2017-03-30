import React, { Component } from 'react';
require('./contentBlock.scss');

class ContentBlock extends Component {
    render() {
        return (
            <div className="content-block">
                <div className="content-unit special">
                    <div className="content-unit__diagonal">
                    </div>
                </div>
                <div className="content-unit purple">
                </div>
                <div className="content-unit purple">
                </div>
                <div className="content-unit limegreen">
                </div>
            </div>
        );
    }
}

export default ContentBlock;