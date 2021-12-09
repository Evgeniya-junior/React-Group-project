import s from './Tabs.module.scss';

function Tabs(props) {
    return (
        <div className={s.tabsBlock}>
            <button className={s.tabsButton} type="button">Поиск по  номеру</button>
            <button className={s.tabsButton} type="button">Поиск по марке</button>
            <button className={s.tabsButton} type="button">Поиск по названию товара</button>
        </div>
    );
}

export default Tabs;