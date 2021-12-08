import s from './Form.module.scss';

function Form(props) {
    return (
        <form className={s.form}>
            <input className={s.formInput} type="text" placeholder="Введите марку" />
            <button className={s.formButton} type="submit">Искать</button>
        </form>
    );
}

export default Form;