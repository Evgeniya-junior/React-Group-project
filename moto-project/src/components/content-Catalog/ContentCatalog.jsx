import * as React from 'react';
import s from "./ContentCatalog.module.scss";
import Filter from "./filter/Filter";
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Link from '@mui/material/Link';
import { Accordion, Button } from '@mui/material';
import NavCatalog from './nav-Catalog/NavCatalog';
import Pagination from '@mui/material/Pagination';
import CatalogCard from './catalog-card/CatalogCard';
import CatalogCardOut from './catalog-card/CatalogCardOut';
// ProductCard ------------------
import img01 from './../../assets/images/catalog-card/image/01.jpg';
import img02 from './../../assets/images/catalog-card/image/02.jpg';
import img03 from './../../assets/images/catalog-card/image/03.jpg';
import img04 from './../../assets/images/catalog-card/image/04.jpg';
import img05 from './../../assets/images/catalog-card/image/05.jpg';
import img06 from './../../assets/images/catalog-card/image/06.jpg';
import img07 from './../../assets/images/catalog-card/image/07.jpg';
import img08 from './../../assets/images/catalog-card/image/08.jpg';
import img09 from './../../assets/images/catalog-card/image/09.jpg';
import img10 from './../../assets/images/catalog-card/image/10.jpg';
import img11 from './../../assets/images/catalog-card/image/11.jpg';
import img12 from './../../assets/images/catalog-card/image/12.jpg';


const productMiniCard = [
    ["Гидроцикл BRP SeaDoo GTI 130hp SE Black / Mango",img01,"1 049 500 ₽"],
    ["Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic",img02,"1 100 475 ₽"],
    ["Гидроцикл BRP SeaDoo GTR 230hp X California green",img03,"1 323 700 ₽"],
    ["Гидроцикл BRP SeaDoo GTR 230hp STD Black / Gulfstream",img04,""],
    ["Гидроцикл BRP SeaDoo GTX 300hp LTD Liquid Metal",img05,"1 543 000 ₽"],
    ["Гидроцикл BRP SeaDoo Spark 60hp 2 up",img06,"732 345 ₽"],
    ["Гидроцикл BRP SeaDoo Spark GTS 90hp Rental",img07,"857 666 ₽"],
    ["Гидроцикл BRP SeaDoo WAKE 230hp PRO Teal blue",img08,"1 229 711 ₽"],
    ["Гидроцикл Spark 2-UP 900 Ho Ace Chili Pepper",img09,"587 440 ₽"],
    ["Гидроцикл Spark 2-UP 900 Ho Ace Pineapple ",img10,"587 440 ₽"],
    ["Гидроцикл BRP Sea-doo Spark 2-UP 900 Ace Vanilla ",img11,""],
    ["Гидроцикл Spark 3-UP 900 HO Ace IBR Blueberry",img12,""],
]



function ContentCatalog(props) {
return (
    <div className={s.content}>
            <div className={s.breadcrumbs}>
                <Breadcrumbs aria-label="breadcrumb"separator={<NavigateNextIcon fontSize="small" />}
                    aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href="/">Главная</Link>
                <Link underline="hover" color="inherit" href="/jetskis/">Гидроциклы</Link>
                </Breadcrumbs>
            </div>
            <h2 className={s.title}>Гидроциклы</h2>
            <NavCatalog/>
            
            <div className={s.catalogInner}>
                <Filter />
                <div className={s.catalogBody}>
                    <div className={s.catalogContent}>
                        <CatalogCard 
                            title={productMiniCard[0][0]} 
                            image={productMiniCard[0][1]}
                            price={productMiniCard[0][2]}/>
                        <CatalogCard 
                            title={productMiniCard[1][0]} 
                            image={productMiniCard[1][1]}
                            price={productMiniCard[1][2]}/>
                        <CatalogCard 
                            title={productMiniCard[2][0]} 
                            image={productMiniCard[2][1]}
                            price={productMiniCard[2][2]}/>
                        <CatalogCardOut 
                            title={productMiniCard[3][0]} 
                            image={productMiniCard[3][1]}
                            price={productMiniCard[3][2]}/>
                        <CatalogCard 
                            title={productMiniCard[4][0]} 
                            image={productMiniCard[4][1]}
                            price={productMiniCard[4][2]}/>
                        <CatalogCard 
                            title={productMiniCard[5][0]} 
                            image={productMiniCard[5][1]}
                            price={productMiniCard[5][2]}/>
                        <CatalogCard 
                            title={productMiniCard[6][0]} 
                            image={productMiniCard[6][1]}
                            price={productMiniCard[6][2]}/>
                        <CatalogCard 
                            title={productMiniCard[7][0]} 
                            image={productMiniCard[7][1]}
                            price={productMiniCard[7][2]}/>
                        <CatalogCard 
                            title={productMiniCard[8][0]} 
                            image={productMiniCard[8][1]}
                            price={productMiniCard[8][2]}/>
                        <CatalogCard 
                            title={productMiniCard[9][0]} 
                            image={productMiniCard[9][1]}
                            price={productMiniCard[9][2]}/>
                        <CatalogCardOut
                            title={productMiniCard[10][0]} 
                            image={productMiniCard[10][1]}
                            price={productMiniCard[10][2]}/>
                        <CatalogCardOut
                            title={productMiniCard[11][0]} 
                            image={productMiniCard[11][1]}
                            price={productMiniCard[11][2]}/>
                    </div>
                    <div className={s.catalogFooter}>
                        <Pagination count={11} variant="outlined" shape="rounded" color='primary' />
                    </div>
                </div>
            </div>
            

        </div>
    );
}

export default ContentCatalog;