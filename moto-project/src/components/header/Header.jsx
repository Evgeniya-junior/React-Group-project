import React from "react";
import { NavLink } from 'react-router-dom';
import s from "./Header.module.scss";

import favorite from './../../assets/images/icon-svg/favorite.svg';
import user from './../../assets/images/icon-svg/user.svg';
import cart from './../../assets/images/icon-svg/cart.svg';
import logo from './../../assets/images/icon-svg/logo.svg';
import HeaderMenuItem from "./header-menu-item/HeaderMenuItem";
import MenuItem from "./menu-item/MenuItem";



function Header() {

   return (
      <header className={s.header}>
         <div className={s.headerBody}>
            <button type="button" class={s.iconMenu}><span></span></button>
            <nav class={s.menuBody}>
               <ul class={s.menuList}>
                  <MenuItem text="Магазины" link="/shops"/>
                  <MenuItem text="Акции" link="/sales"/>
                  <MenuItem text="Доставка и оплата" link="/delivery"/>
               </ul>
            </nav>
            <div class={s.logo}>
               <a  class={s.logoLink} href="">
                  <img class={s.logoImage} src={logo} alt="" />
                  <span class={s.logoText}>DRIVE MOTO</span>
               </a>
            </div>
            <div className={s.rightBlock}>
               <div href="" className={s.location}>
                  <a href="" className={s.locationLink}>
                     <span>Москва,  ул. Науки  25</span>
                  </a>
               </div>
               
               <div className={s.actions}>
                  <ul className={s.actionsList}>
                     <li className={s.actionsItem}>
                        <a href="" className={s.favorite}>
                           <img src={favorite} alt="" />
                        </a>
                     </li>
                     <li className={s.actionsItem}>
                        <a href="" className={s.user}>
                           <img src={user} alt="" />
                        </a>
                     </li>
                     <li className={s.actionsItem}>
                        <a href="" className={s.cart}>
                           <img src={cart} alt="" />
                           <span className={s.cartCount}>1</span>
                        </a>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
         <div className={s.headerMenu}>
            <nav className={s.headerMenuBody}>
               <ul className={s.headerMenuList}>
                  <HeaderMenuItem text="Квадроциклы" link="/Квадроциклы"/>
                  <HeaderMenuItem text="Катера" link="/Катера"/>
                  <HeaderMenuItem text="Гидроциклы" link="/Гидроциклы"/>
                  <HeaderMenuItem text="Лодки" link="/Лодки"/>
                  <HeaderMenuItem text="Вездеходы" link="/Вездеходы"/>
                  <HeaderMenuItem text="Снегоходы" link="/Снегоходы"/>
                  <HeaderMenuItem text="Двигатели" link="/Двигатели"/>
                  <HeaderMenuItem text="Запчасти" link="/Запчасти"/>
               </ul>
            </nav>
         </div>
      </header>
   );
}

export default Header;
