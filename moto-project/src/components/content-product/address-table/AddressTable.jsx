import s from "./AddressTable.module.scss";
import RowTable from "./row-table/RowTable";

const row1 = {
    address: "Москва, ул. Науки 25",
    weekday: "08:00-19:00",
    weekends: "09:00-17:00",
    availability: "В наличии",
    number: "1"
}
const row2 = {
    address: "Москва, ул.  Южная 134",
    weekday: "08:00-19:00",
    weekends: "09:00-17:00",
    availability: "В наличии",
    number: "1"
}
const row3 = {
    address: "Санкт-Петербург, ул. Красная 19",
    weekday: "08:00-19:00",
    weekends: "09:00-17:00",
    availability: "Нет в наличии",
    number: "0"
}
const row4 = {
    address: "Киев, ул Шевченко 167",
    weekday: "08:00-19:00",
    weekends: "09:00-17:00",
    availability: "Нет в наличии",
    number: "0"
}

function AddressTable(props) {
    return (
        <table className={s.addressTable}>
            <thead>
                <tr>
                    <th>Адрес</th>
                    <th>Режим работы</th>
                    <th>Доступно</th>
                    <th>Количество</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <RowTable address={row1.address} weekday={row1.weekday} weekends={row1.weekends}
                    availability={row1.availability} number={row1.number}/>
                <RowTable address={row2.address} weekday={row2.weekday} weekends={row2.weekends}
                    availability={row2.availability} number={row2.number}/>
                <RowTable address={row3.address} weekday={row3.weekday} weekends={row3.weekends}
                    availability={row3.availability} number={row3.number}/>
                <RowTable address={row4.address} weekday={row4.weekday} weekends={row4.weekends}
                    availability={row4.availability} number={row4.number}/>
            </tbody>
        </table>
    );
}

export default AddressTable;