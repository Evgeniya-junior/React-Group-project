import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './MenuLink.module.scss';



function MenuLink(props) {
   return (

      <NavLink to="/" className={s.link} style={props.style} >{props.text}</NavLink>

   );
}

export default MenuLink;

