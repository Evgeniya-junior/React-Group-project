import Button from "../../components/button/Button";
import s from "./RowTable.module.scss";

function RowTable(props) {
    return (
            <div className={s.rowTable}>
                <div className={s.rowTable__cell}>
                    <span className={s.rowTable__none}>Адрес</span>
                    <span>{props.address}</span>
                </div>
                <div className={s.rowTable__cell}>
                    <span className={s.rowTable__none}>Режим работы</span>
                    <div>
                        <span>пн-сб:</span>
                        <span>{props.weekday}</span>
                    </div>
                    <div>
                        <span>вс:</span>
                        <span>{props.weekends}</span>
                    </div>
                </div>
                <div className={s.rowTable__cell}>
                    <span className={s.rowTable__none}>Доступно</span>
                    {props.availability}
                </div>
                <div className={s.rowTable__cell}>
                    <span className={s.rowTable__none}>Количество</span>
                    {props.number}
                </div>
                <div className={s.rowTable__cell}>
                    <Button title="Купить"/>
                </div>
            </div>
    );
}
export default RowTable;