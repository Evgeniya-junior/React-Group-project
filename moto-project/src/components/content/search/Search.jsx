import s from './Search.module.scss';

import Tabs from './tabs/Tabs';
import Form from './form/Form';

function Search(props) {
    return (
        <div className={s.search}>
            <Tabs/>
            <Form/>
        </div>
    );
}

export default Search;