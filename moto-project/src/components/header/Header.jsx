import React from "react";
import { NavLink } from 'react-router-dom';
import s from "./Header.module.scss";
import HeaderLink from "./HeaderLink";
import logo from "./../../assets/img/logo-icon.svg";
import location from "./../../assets/img/location-icon.svg";
import personal from "./../../assets/img/personal-icon.svg";
import Heart from './Heart';
import Basket from './Basket';
import Menu from "./Menu";
import BasketCounter from "./BasketCounter";






function Header() {

   return (
      <>
         <header className={s.header}>
            <nav className={s.menu}>
               <ul className={s.menuList}>
                  <li className={s.menuItem}>
                     <HeaderLink href="#" text="Магазины" />
                  </li>
                  <li className={s.menuItem}>
                     <HeaderLink href="#" text="Акции" />
                  </li>
                  <li className={s.menuItem}>
                     <HeaderLink href="#" text="Доставка и оплата" />
                  </li>
               </ul>
            </nav>

            <NavLink to="/" className={s.logo} ><img className="logoImg" src={logo} alt="#" /></NavLink>

            <nav className={s.social}>
               <address className={s.adress}>
                  <img src={location} alt="location" />
                  <HeaderLink href="#" text="Москва,  ул. Науки  25" style={{ margin: "0" }} />
               </address>
               <nav className={s.socialIcons}>
                  <ul className={s.socialList}>
                     <li className={s.socialItem}>
                        <Heart />
                     </li>
                     <li className={s.socialItem}>
                        <img src={personal} alt="" />
                     </li>
                     <li className={s.socialItem}>
                        <Basket />
                        <BasketCounter text="1" />
                     </li>
                  </ul>
               </nav>
            </nav>
         </header>
         <Menu />



      </>
   );
}

export default Header;
