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

function ContentCatalog(props) {
return (
    <div className={s.content}>
            <div className={s.breadcrumbs}>
                <Breadcrumbs aria-label="breadcrumb"
                             separator={<NavigateNextIcon fontSize="small" />}
                             aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href="/">Главная</Link>
                <Link underline="hover" color="inherit" href="/jetskis/">Гидроциклы</Link>
                </Breadcrumbs>
            </div>
            <h2 className={s.title}>Гидроциклы</h2>
            <NavCatalog/>
        <Filter />
        <Pagination count={11} variant="outlined" shape="rounded" />
        </div>
    );
}

export default ContentCatalog;