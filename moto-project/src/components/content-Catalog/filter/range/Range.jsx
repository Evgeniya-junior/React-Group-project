import * as React from 'react';
import s from './Range.module.scss';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import MuiInput from '@mui/material/Input';
import Input from '@mui/material/Input';

function valuetext(value) {
  return `${value}`;
}

const minDistance = 10;

export default function MinimumDistanceSlider() {
  const [value1, setValue1] = React.useState([20, 37]);

  const handleChange1 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };

 

  return (
    <Box sx={{ width: 290 }}>
      <Slider
        getAriaLabel={() => 'Minimum distance'}
        value={value1}
        onChange={handleChange1}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        disableSwap
      />
      <div className={s.conclusion}>
        <div className={s.minInput}>
            <span className={s.minSpan}>от</span>
            <Input placeholder='100 000' style={{width:'55px'}}>100 000</Input>
        </div>
        <div className={s.maxInput}>
          <span className={s.maxSpan}>до</span>
          <Input placeholder='500 000' style={{width:'55px'}}></Input>
        </div>
      </div>
  </Box>
    

  );
}