import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './MenuBurger.module.scss';
import sprite from './../../../components/components/sprite/sprite.svg';


function MenuBurger(props) {
   return (
      <div className={s.menuBurger}>
         <div className={s.menuBurgerBody}>
            <nav>
               <ul>
                  <li className={s.menuBurgerItem}>
                     <a href="" className={s.menuBurgerLink}>
                        <svg class={s.icon} width="20" height="20" viewBox="0 0 20 20">
                           <use xlinkHref={sprite + "#user"}></use>
                        </svg>
                        <span>Войти</span>
                     </a>
                  </li>
                  <li className={s.menuBurgerItem}>
                     <a href="" className={s.menuBurgerLink}>
                        <svg class={s.icon} width="20" height="20" viewBox="0 0 20 20">
                           <use xlinkHref={sprite + "#user"}></use>
                        </svg>
                        <span>Регистрация</span>
                     </a>
                  </li>
                  <li className={s.menuBurgerItem}>
                     <a href="" className={s.menuBurgerLink}>
                        <svg class={s.icon} width="20" height="18" viewBox="0 0 20 18">
                           <use xlinkHref={sprite + "#favorite"}></use>
                        </svg>
                        <span>Избранное</span>
                     </a>
                  </li>
                  <li className={s.menuBurgerItem}>
                     <a href="" className={s.menuBurgerLink}>
                        <svg class={s.icon} width="30" height="23" viewBox="0 0 30 23">
                           <use xlinkHref={sprite + "#cart"}></use>
                        </svg>
                        <span>Корзина</span>
                     </a>
                  </li>
                  <li className={s.menuBurgerItem}>
                     <a href="" className={s.menuBurgerLink}>
                        <svg class={s.icon} width="16" height="19" viewBox="0 0 16 19">
                           <use xlinkHref={sprite + "#shop"}></use>
                        </svg>
                        <span>Магазины</span>
                     </a>
                  </li>
                  <li className={s.menuBurgerItem}>
                     <a href="" className={s.menuBurgerLink}>
                        <svg class={s.icon} width="17" height="26" viewBox="0 0 17 26">
                           <use xlinkHref={sprite + "#percentage"}></use>
                        </svg>
                        <span>Акции</span>
                     </a>
                  </li>
                  <li className={s.menuBurgerItem}>
                     <a href="" className={s.menuBurgerLink}>
                        <svg class={s.icon} width="16" height="15" viewBox="0 0 16 15">
                           <use xlinkHref={sprite + "#delivery"}></use>
                        </svg>
                        <span>Доставка и оплата</span></a>
                  </li>
                  <li className={s.menuBurgerItem}>
                     <a href="" className={s.menuBurgerLink}>Квадроциклы</a>
                  </li>
                  <li className={s.menuBurgerItem}>
                     <a href="" className={s.menuBurgerLink}>Катера</a>
                  </li>
                  <li className={s.menuBurgerItem}>
                     <a href="" className={s.menuBurgerLink}>Гидроциклы</a>
                  </li>
                  <li className={s.menuBurgerItem}>
                     <a href="" className={s.menuBurgerLink}>Лодки</a>
                  </li>
                  <li className={s.menuBurgerItem}>
                     <a href="" className={s.menuBurgerLink}>Вездеходы</a>
                  </li>
                  <li className={s.menuBurgerItem}>
                     <a href="" className={s.menuBurgerLink}>Снегоходы</a>
                  </li>
                  <li className={s.menuBurgerItem}>
                     <a href="" className={s.menuBurgerLink}>Двигатели</a>
                  </li>
                  <li className={s.menuBurgerItem}>
                     <a href="" className={s.menuBurgerLink}>Запчасти</a>
                  </li>
               </ul>
               <p className={s.menuBurgerLocation}>Москва,<br /> ул. Науки  25</p>
            </nav>
         </div>
         <div className={s.menuBurgerVoid}>
         </div>
      </div>

   );
}

export default MenuBurger;

