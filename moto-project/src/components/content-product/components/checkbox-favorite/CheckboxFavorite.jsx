import s from "./CheckboxFavorite.module.scss";
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


function CheckboxFavorite(props) {
    return (
        <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
    );
}

export default CheckboxFavorite;