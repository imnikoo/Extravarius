import React from 'react';
import FrontPart from '../containers/FrontPart/frontPart';
import BackPart from '../containers/BackPart/backPart';
import './app.scss';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'

const App = () => (
    <Router>
        <div className="application-container">        
            <FrontPart></FrontPart>
            <BackPart></BackPart>
        </div>
    </Router>
);

export default App;
