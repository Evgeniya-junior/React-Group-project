import s from "./Filter.module.scss";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import SearchModule from "./../search-model/SearchModel";
import Selects from "../selects/Selects";

function Filter(props) {
return (
    <div className={s.filter}>
        {/* Аккардеон Наличие */}
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                <Typography>Наличие</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="В наличие" />
                    <FormControlLabel control={<Checkbox />} label="Под заказ" />
                </FormGroup>
            </AccordionDetails>
        </Accordion>

        {/* Аккардеон Новинки */}
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                <Typography>Новинки</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <FormGroup>
                    <FormControlLabel control={<Checkbox defaultChecked/>} label="Все" />
                    <FormControlLabel control={<Checkbox />} label="Новинки" />
                    <FormControlLabel control={<Checkbox />} label="Акции" />
                </FormGroup>
                <Link href="#">Показать ещё</Link>
            </AccordionDetails>
        </Accordion>

        {/* sections Selects */}
        <Selects/>
        {/* Аккардион Бренд */}
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                <Typography>Бренд</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="BRP" />
                    <FormControlLabel control={<Checkbox />} label="Spark 2" />
                    <FormControlLabel control={<Checkbox />} label="Spark 3" />
                </FormGroup>
                <Link href="#">Показать ещё</Link>
            </AccordionDetails>
        </Accordion>
        {/* Аккардеон Модель */}
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                <Typography>Модель</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <SearchModule/>
                <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="Sea-doo Spark 2" />
                    <FormControlLabel control={<Checkbox />} label="SeaDoo Spark 90 " />
                    <FormControlLabel control={<Checkbox />} label="SeaDoo GTI 155" />
                    <FormControlLabel control={<Checkbox />} label="SeaDoo GTR 230" />
                </FormGroup>
                <Link href="#">Показать ещё</Link>
            </AccordionDetails>
        </Accordion>
        {/* Аккардеон Страны */}
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                <Typography>Страны</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="Россия" />
                    <FormControlLabel control={<Checkbox />} label="Германия" />
                    <FormControlLabel control={<Checkbox />} label="Китай" />
                    <FormControlLabel control={<Checkbox />} label="США" />
                </FormGroup>
                <Link href="#">Показать ещё</Link>
            </AccordionDetails>
        </Accordion>
    </div>      
    );
}

export default Filter;