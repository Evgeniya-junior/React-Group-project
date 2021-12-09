import s from "./SelectSection.module.scss";
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


function SelectSection(props) {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
    setAge(event.target.value);
    };

    return (
        <div className={s.selectSection}>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 268 }}>
                <InputLabel id="demo-simple-select-standard-label">{props.label}</InputLabel>
                <Select labelId="demo-simple-select-standard-label" id="demo-simple-select-standard"
                value={age} onChange={handleChange} label={props.label}>
                    <MenuItem value=""><em>None</em></MenuItem>
                    <MenuItem value={90}>90</MenuItem>
                    <MenuItem value={130}>130</MenuItem>
                    <MenuItem value={154}>154</MenuItem>
                    <MenuItem value={230}>230</MenuItem>
                    <MenuItem value={300}>300</MenuItem>
                </Select>
            </FormControl>
        </div>
);
}

export default SelectSection;