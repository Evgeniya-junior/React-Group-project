import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './IconMenu.module.scss';


function IconMenu() {
    return ( 
        <button type="button" class={s.iconMenu}>
            <span></span>
        </button>
    );
}

export default IconMenu;

