import s from "./TableMd.module.scss";
import RowTable from "./row-table/RowTable";


function TableMd(props) {
    return (
        <div className={s.Tablet}>
            <table className={s.addressTable}>
                <RowTable address={
                    props.AddressData[0][0]}
                    weekday={props.AddressData[0][1]}
                    weekends={props.AddressData[0][2]}
                    number={props.AddressData[0][3]} />
            </table>
            <details>
                <summary>Показать еще</summary>
                <table className={s.addressTable}>
                        <RowTable address={
                            props.AddressData[1][0]}
                            weekday={props.AddressData[1][1]}
                            weekends={props.AddressData[1][2]}
                            number={props.AddressData[1][3]} />
                        <RowTable address={
                            props.AddressData[2][0]}
                            weekday={props.AddressData[2][1]}
                            weekends={props.AddressData[2][2]}
                            number={props.AddressData[2][3]} />
                        <RowTable address={
                            props.AddressData[3][0]}
                            weekday={props.AddressData[3][1]}
                            weekends={props.AddressData[3][2]}
                            number={props.AddressData[3][3]} />
                </table>
            </details>
        </div>
    );
}
export default TableMd;