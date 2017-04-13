import React, { Component } from 'react';
require('./contentBlock.scss');
var offers = require('base64-image!../../../../extras/ic_local_offer_white_24dp_2x.png');

class ContentBlock extends Component {
    render() {
        return (
            <div className="content-block">
                <div className="content-unit special">
                    <div className="shifted-info">
                        <div className="shifted-info__date">
                            <span>12</span><span>\09\2016</span>
                        </div>
                        <span className="shifted-info__action-title">Лекція-експеримент</span>
                        <span className="shifted-info__action">ДИФУЗІЯ. ВЗАЄМОДІЯ МОЛЕКУЛ ТА АТОМІВ У ПРИРОДІ.</span>
                        <div className="buttons">
                            <div className="buttons__details">ДЕТАЛЬНІШЕ</div>
                            <div className="buttons__checkout-tickets">ПРИДБАТИ КВИТКИ</div>
                        </div>
                    </div>
                    <div className="content-unit__diagonal" />
                </div>
                <div className="content-unit purple">
                    <img src={offers} alt="Зніжкі"/>
                    <span>АКЦІЇ ТА ЗНИЖКИ</span>
                    <span>Активним відвідувачам дитячого табору - знижка</span>
                    <span>При оплаті 5 днів перебування в дитячому таборі "Літні канікули в музеї" - знижка!</span>
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