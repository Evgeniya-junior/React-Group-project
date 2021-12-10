import SearchForm from "./search-form/SearchForm";
import s from "./SearchShop.module.scss";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';


const BpIcon = styled('span')(({ theme }) => ({
    borderRadius: '2px',
    width: 14,
    height: 14,
    boxShadow:
        theme.palette.mode === 'dark'
            ? '0 0 0 1px rgb(16 22 26 / 40%)'
            : 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: theme.palette.mode === 'dark' ? '#394b59' : '#f5f8fa',
    backgroundImage:
        theme.palette.mode === 'dark'
            ? 'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))'
            : 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '.Mui-focusVisible &': {
        outline: '2px auto rgba(19,124,189,.6)',
        outlineOffset: 2,
    },
    'input:hover ~ &': {
        backgroundColor: theme.palette.mode === 'dark' ? '#30404d' : '#ebf1f5',
    },
    'input:disabled ~ &': {
        boxShadow: 'none',
        background:
            theme.palette.mode === 'dark' ? 'rgba(57,75,89,.5)' : 'rgba(206,217,224,.5)',
    },
}));

const BpCheckedIcon = styled(BpIcon)({
    backgroundColor: '#137cbd',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&:before': {
        display: 'block',
        width: 14,
        height: 14,
        backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
        content: '""',
    },
    'input:hover ~ &': {
        backgroundColor: '#106ba3',
    },
});

// Inspired by blueprintjs
function BpRadio(props) {
    return (
        <Radio
            sx={{
                '&:hover': {
                    bgcolor: 'transparent',
                },
            }}
            disableRipple
            color="default"
            checkedIcon={<BpCheckedIcon />}
            icon={<BpIcon />}
            {...props}
        />
    );
}


function SearchShop() {
    return (
        <div className={s.searchShop}>
            <div className={s.searchShopInnerForm}>
                <span>Магазин</span>
                <SearchForm/>
            </div>
            <FormControl component="fieldset">
                <RadioGroup defaultValue="week" aria-label="Когда забрать" name="customized-radios">
                    <div className={s.RadioWrapper}>
                        <FormControlLabel value="today" control={<BpRadio />} label="Забрать сегодня" />
                        <FormControlLabel value="week" control={<BpRadio />} label="Забрать в течение недели" />
                    </div>
                </RadioGroup>
            </FormControl>
        </div>
    );
}

export default SearchShop;