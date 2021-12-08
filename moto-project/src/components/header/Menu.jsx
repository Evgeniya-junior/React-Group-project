import React from 'react';
import MenuLink from './MenuLink';

import s from './Menu.module.scss';


function Menu() {
   return (
      <nav className={s.menu}>
         <ul className={s.list}>


            <li className={s.item}>
               <MenuLink text="Квадроциклы" />
            </li>
            <li className={s.item}>
               <MenuLink text="Катера" />
            </li>
            <li className={s.item}>
               <MenuLink text="Гидроциклы" />
            </li>
            <li className={s.item}>
               <MenuLink text="Лодки" />
            </li>
            <li className={s.item}>
               <MenuLink text="Вездеходы" />
            </li>
            <li className={s.item}>
               <MenuLink text="Снегоходы" />
            </li>
            <li className={s.item}>
               <MenuLink text="Двигатели" />
            </li>
            <li className={s.item}>
               <MenuLink text="Запчасти" />
            </li>

         </ul>


      </nav>
   );
}

export default Menu;
