import s from "./Filter.module.scss";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import SearchModule from "./../search-model/SearchModel";
import Selects from "../selects/Selects";
import Range from "./range/Range";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

function Filter(props) {
    const Accordion = styled((props) => (
        <MuiAccordion disableGutters elevation={0} square {...props} />
      ))(({ theme }) => ({
        '&:not(:last-child)': {
          borderBottom: 0,
        },
        '&:before': {
          display: 'none',
        },
      }));
      
      const AccordionSummary = styled((props) => (
        <MuiAccordionSummary
          expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
          {...props}
        />
      ))(({ theme }) => ({
        
        flexDirection: 'row-reverse',
        
        '& .MuiAccordionSummary-content': {
          marginLeft: theme.spacing(1),
          
        },
        '& .MuiTypography-root':{
            fontFamily: 'SF Pro Display',
          fontStyle: "normal",
          fontWight: '600',
          fontSize: '16px' ,
          color: '#2F3035',
        },
        '& .css-29zqm4-MuiButtonBase-root .MuiAccordionSummary-root':{
            padding:'0',
        }
      }));
      
      const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
        padding: theme.spacing(2),
        '& .MuiFormGroup-root':{
            flexDirection:"row"
        },
        '& .MuiFormControlLabel-root .MuiFormControlLabel-label':{
            fontFamily:'SFProDisplayRegular',
            lineHeight: '17px',
            fontSize: '14px',
            color: '#000000'
        },
        '& .MuiButtonBase-root':{
            padding: '6px 12px 6px 12px',
            marginLeft: '10px'
        },
        '& .MuiButtonBase-root:first-child':{
            marginLeft: '0px'
        },
      }));
    
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
    }
    
return (
    <div className={s.filter}>
        
        {/* Аккардеон Наличие */}
        <Accordion>
            <AccordionSummary  expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
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

        {/* Цена */}
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                <Typography>Цена</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <FormGroup>
                    <Range/>
                </FormGroup>
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

        {/* Акции */}
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                <Typography>Акции</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <FormGroup>
                <Stack direction="row" spacing={2}>
                    <Button variant="contained">SALE</Button>
                    <Button variant="contained" disabled>NEW</Button>
                    <Button variant="contained" disabled>HIT</Button>
                    <Button variant="contained" color="success">Дилер</Button>
                </Stack>
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
        {/* нихняя кнопка */}
        <Button variant="contained" disabled>Выбрать</Button>
        {/* Дополнительные параметры */}
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Дополнительные параметры</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
        </Accordion>
        {/* сбросить фильтр */}
        <Link disabled>Сбросить фильтр</Link>
    </div>      
    );
}

export default Filter;