import React, { Component } from 'react';
import Header from './Header/header';
import ContentBlock from './ContentBlock/contentBlock';
import offers from '../../../extras/ic_local_offer_white_24dp_2x.png';

import './frontPart.scss';

class FrontPart extends Component {
   render() {
      return (
         <div className='front-part'>
            <Header/>
            <ContentBlock/>

            <div className='content-block'>
               <div className='content-unit kids limegreen' />
               <div className='content-unit purple offers'>
                  <img src={offers} alt='Зніжкі'/>
                  <span className='offers__first-mention'>СВЯТКУЙТЕ СВІЙ ДЕНЬ НАРОДЖЕННЯ В МУЗЕЇ!</span>
                  <span className='offers__third-mention'>Хочете влаштувати свято своїй дитині по-справжньому незабутне свято? Тоді послуга саме для вас.</span>
               </div>
               <div className='content-unit purple offers'>
                  <img src={offers} alt='Зніжкі'/>
                  <span className='offers__first-mention'>НАУКОВИЙ ГУРТОК</span>
                  <span className='offers__second-mention'>"ЦІКАВА ХІМІЯ З ВОЛТЕРОМ ВАЙТОМ"</span>
                  <span className='offers__third-mention'>Ваша дитина полюбляє "хімічіти" вдома? Приводьте її до нас, на заняття гуртка "Цікава хімія"</span>
               </div>
               <div className='content-unit kids limegreen'/>
            </div>

            <div className='info-content'>
               <div className='place-work-time'>
                  <div className='place'>
                     <span>Чекаемо вас за адресою:</span>
                     <span>М. КИЇВ, ВУЛ. ВЕРХНІЙ ВАЛ 2А</span>
                  </div>
                  <div className='work-time'>
                     <span>Графік роботи музею:</span>
                     <span>ПН-ВИХІДНИЙ</span>
                     <span>ВТ-ПТ: 9:30 - 19:00</span>
                     <span>СБ-НД, СВЯТА: 10:00 - 20:00</span>
                  </div>
                  <div className='contacts'>
                     <span>Контакти</span>
                     <span>+38 (093) 098-62-52,</span>
                     <span>+38 (093) 098-62-52,</span>
                     <span>+38 (093) 098-62-52</span>
                     <span>enjoy@extravarious.com.ua</span>
                  </div>
               </div>
               <div className='cafe-img'>
                  <img src={offers} alt='Зніжкі'/>
                  <span className='title'>КАФЕТЕРІЙ</span>
               </div>
               <div className='shop-img'>
                  <img src={offers} alt='Зніжкі'/>
                  <span className='title'>МАГАЗИН</span>
               </div>
               <div className='map-place' />
               <div className='portal'>
                  <img src={offers} alt='Зніжкі'/>
                  <span className='title'>ОСВІТНІЙ ПОРТАЛ</span>
               </div>
            </div>
         </div>


      );
   }
}

export default FrontPart;
