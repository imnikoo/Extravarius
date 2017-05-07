import React, { Component } from 'react';
import './backPart.scss';

const background = require('../../../extras/076486333becfb81dac8af080e46af60-cropped-compressor.jpg');
const logo = require('../../../extras/logo-compressor.png');
const twitter = require('../../../extras/Twitter_Logo_White_On_Image.png');
const facebook = require('../../../extras/FB-f-Logo__blue_50.png');

class BackPart extends Component {
   render() {
      return (
         <div className='back-part'>
            <img className='back-part__difussion' src={background}/>
            <div className='news-digest'>
               <div className='latest-item'>
                  <span className='latest-item__date'>14/04/17</span>
                  <span className='latest-item__description'>Музей "Екстраваріус" побував на
                     пропрем'єрному показі мультфільму "Норм та Незламані"</span>
               </div>
               <div className='latest-item-details'>
                  <button className='to-details'>ДЕТАЛЬНІШЕ</button>
               </div>
               <div className='next-to-latest-item'>
                  <span className='latest-item__date'>1/04/17</span>
                  <span className='latest-item__description'>Сніжана Єгорова презентувала свою книгу в Екстраваріусі</span>
               </div>
            </div>
            <div className='tesla-container'>
               <div className='tesla-img'/>
               <div className='tesla-transformator'/>
               <div className='transformator-details'>
                  <span className='transformator-details__title'>ТРАНСФОРМАТОР ТЕСЛА</span>
                  <span className='transformator-details__info'>
                     Пристрій, винайдений Ніколою Теслою, що носить його ім'я і виконаний у вигляді
                     трансформатора, ввімкнутого обмотками в коливальні контури, які працюють в
                     резонансному режимі та служить для утворення високої електричної напруги
                     (десятки кіловольт) високої частоти.
                  </span>
                  <span className='transformator-details__info'>Прилад було запатентовано 22
                     вересня 1896 року, як "Апарат для вироблення електричних струмів високої частоти
                     та потенціалу"</span>
                  <button className='read-more'>ЧИТАТИ ДАЛІ</button>
                  <button className='buy-tickets'>ПРИДБАТИ КВИТКИ НА ШОУ</button>
               </div>
            </div>
            <footer>
               <div className='info'>
                  <div className='logo-container'>
                     <img className='logo__image' src={logo} alt='Лого'/>
                     <div className='title-container'>
                        <span className='title-container__title'>
                           Екстраваріус
                        </span>
                        <span className='title-container__description'>
                           Музей популярної науки і техніки
                        </span>
                     </div>
                  </div>
                  <div className='subscribe-input'>
                     <span className='subscribe-title'>ПІДПИСАТИСЬ НА НОВИНИ</span>
                     <input placeholder='Введіть e-mail' type='text'/>
                  </div>
                  <div className='socials-container'>
                     <span className='socials-container__title'>МИ В СОЦІАЛЬНИХ МЕРЕЖАХ</span>
                     <img className='facebook-icon' src={facebook}/>
                     <img className='twitter-icon' src={twitter}/>
                  </div>
               </div>

               <nav className='footer-nav'>
                  <ul className='list'>
                     <li className='list-title'>ЕКСПОЗИЦІЯ ТА ШОУ</li>
                     <li className='list-element'>Шоу в музеї</li>
                     <li className='list-element'>Експозиція музею</li>
                     <li className='list-element'>Виїздні шоу</li>
                     <li className='list-element'>3Д тур</li>
                  </ul>
                  <ul className='list'>
                     <li className='list-title'>НОВИНИ</li>
                     <li className='list-element'>Новини музею</li>
                     <li className='list-element'>Новини зі світу науки</li>
                     <li className='list-element'>Анонси</li>
                     <li className='list-element'>Акції</li>
                  </ul>
                  <ul className='list'>
                     <li className='list-title'>ОСВІТНІ ПРОГРАМИ</li>
                     <li className='list-element'>Шкільні екскурсії</li>
                     <li className='list-element'>Наукові гуртки</li>
                     <li className='list-element'>Лекції</li>
                     <li className='list-element'>Майстер-класи</li>
                  </ul>
                  <ul className='list'>
                     <li className='list-title'>ОРГАНІЗАЦІЯ ЗАХОДІВ</li>
                     <li className='list-element'>День народження</li>
                     <li className='list-element'>Корпоративні заходи</li>
                     <li className='list-element'>Оренда приміщень</li>
                     <li className='list-element'>Кафе</li>
                  </ul>
                  <ul className='list'>
                     <li className='list-title'>ПРО НАС</li>
                     <li className='list-element'>Про музей</li>
                     <li className='list-element'>Правила поведінки</li>
                     <li className='list-element'>Відгуки</li>
                     <li className='list-element'>Благодіність</li>
                     <li className='list-element'>FAQ</li>
                  </ul>
                  <ul className='list'>
                     <li className='list-title'>Музей</li>
                     <li className='list-element'>Квитки</li>
                     <li className='list-element'>Магазин</li>
                     <li className='list-element'>Вакансії</li>
                     <li className='list-element'>Фото та відео</li>
                     <li className='list-element'>Подяки</li>
                  </ul>
               </nav>
            </footer>
         </div>
      );
   }
}

export default BackPart;
