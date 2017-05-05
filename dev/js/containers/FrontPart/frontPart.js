import React, { Component } from 'react';
import Header from './Header/header';
import ContentBlock from './ContentBlock/contentBlock';
import './frontPart.scss';

class FrontPart extends Component {
   render() {
      return (
         <div className='front-part'>
            <Header/>
            <ContentBlock/>
         </div>
      );
   }
}

export default FrontPart;
