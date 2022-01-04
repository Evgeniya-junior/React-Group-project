import * as React from 'react';

import SearchShop from '../search-shop/SearchShop';
import AddressTable from '../address-table/AddressTable';

import s from './ProductTabs.module.scss';
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';


//удалить
const primary = {
    50: '#F0F7FF',
    100: '#C2E0FF',
    200: '#80BFFF',
    300: '#66B2FF',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    700: '#0059B2',
    800: '#004C99',
    900: '#003A75',
};

const Tab = styled(TabUnstyled)`
    color: #2f3035c7;
    cursor: pointer;
    font-size: 1.25rem;
    background: transparent;
    padding-bottom: 4px;
    border: none;
    display: flex;

    &.Mui-selected {
        color: #2F3035;
        @media screen and (max-width: 992px) {
            font-weight: bold;
        } 
    }

    &:hover {
        color: #2F3035;
    }

    // хз к чему стили
    &.${buttonUnstyledClasses.focusVisible} {
        color: #000;
        outline: none;
        background-color: ${primary[600]};
        border-bottom: 2px solid ${primary[600]};
    }

    &.${tabUnstyledClasses.selected} {
        border-bottom: 2px solid #1C62CD;
        @media screen and (max-width: 992px) {
            border-bottom: 0;
        } 
    }

    &.${buttonUnstyledClasses.disabled} {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;

const TabPanel = styled(TabPanelUnstyled)`
    width: 100%;
    margin-bottom: 100px;
`;

const TabsList = styled(TabsListUnstyled)`
    background-color: transparent;
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 992px) {
        flex-direction: column;
        align-items: flex-start;
    }
`;

export default function ProductTabs() {
    return (
        <TabsUnstyled defaultValue={3}>
            <div className={s.tabListWrapper}>
                <TabsList>
                    <Tab>О товаре</Tab>
                    <Tab>Характеристики</Tab>
                    <Tab>Отзывы</Tab>
                    <Tab>Самовывоз</Tab>
                    <Tab>Доставка</Tab>
                    <Tab disabled>Cервис</Tab>
                    <Tab>Гарантия</Tab>
                </TabsList>
            </div>
            <TabPanel value={0}>
                Что-то о таваре
            </TabPanel>
            <TabPanel value={1}>
                Опять какие-то характеристики
            </TabPanel>
            <TabPanel value={2}>
                Отзывы
            </TabPanel>
            <TabPanel value={3}>
                <SearchShop/>
                <AddressTable/>
            </TabPanel>
            <TabPanel value={4}>
                Доставка
            </TabPanel>
            <TabPanel value={5}>
                Сервис
            </TabPanel>
            <TabPanel value={6}>
                Гарантия
            </TabPanel>
        </TabsUnstyled>
    );
}