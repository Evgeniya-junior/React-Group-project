import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './HeaderLink.module.scss';



function HeaderLink(props) {
   return (

      <NavLink to="/" className={s.link} style={props.style}>{props.text}</NavLink>
   );
}

export default HeaderLink;

