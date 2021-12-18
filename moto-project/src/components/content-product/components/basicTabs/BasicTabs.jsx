import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import SearchShop from '../../search-shop/SearchShop';
import AddressTable from '../../address-table/AddressTable';
import { easing } from '@mui/material';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <div sx={{ p: 3 }}>
                    <span>{children}</span>
                </div>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(3);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <div sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="О товаре" {...a11yProps(0)} />
                    <Tab label="Характеристики" {...a11yProps(1)} />
                    <Tab label="Отзывы" {...a11yProps(2)} />
                    <Tab label="Самовывоз" {...a11yProps(3)}/>
                    <Tab label="Доставка" {...a11yProps(4)} />
                    <Tab label="Cервис" {...a11yProps(5)} />
                    <Tab label="Гарантия" {...a11yProps(6)} />
                </Tabs>
            </div>
            <TabPanel value={value} index={0}>
                Что-то о таваре
            </TabPanel>
            <TabPanel value={value} index={1}>
                Опять какие-то характеристики
            </TabPanel>
            <TabPanel value={value} index={2}>
                Отзывы
            </TabPanel>
            <TabPanel value={value} index={3}>
                <SearchShop/>
                <AddressTable/>
            </TabPanel>
            <TabPanel value={value} index={4}>
                Доставка
            </TabPanel>
            <TabPanel value={value} index={5}>
                Сервис
            </TabPanel>
            <TabPanel value={value} index={6}>
                Гарантия
            </TabPanel>
        </div>
    );
}