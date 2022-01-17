import React from "react";
import s from "./Mailing.module.scss";
import {styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const TextFieldCost = styled(TextField)({
    '&.MuiOutlinedInput-root':{
        borderRadius:'0px'
    },  
    '&.MuiInputLabel-root':{
        fontFamily: 'SFProDisplayRegular',
        fontSize:' 14px',
        lineHeight: '17px',
        color: '#C4C4C4'
    },  
  });


function Mailing(props) {

   return (
        <div className={s.mailing}>
            <h3 className={s.header}>Подпишитесь на нашу рассылку и узнавайте о акция быстрее</h3>
            <div className={s.form}>
                <TextFieldCost className={s.input} id="outlined-basic" size="small" label="Введите ваш e-mail:"></TextFieldCost>
                <Button variant="contained" style={{borderRadius:"0px"}}>Отправить</Button>
            </div>
            {/* <Form placeholder='Введите ваш e-mail:' text='Отправить'/> */}
        </div> 
   );
}

export default Mailing;