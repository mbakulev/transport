import { Table } from "react-bootstrap"
import BootstrapTable from 'react-bootstrap-table-next'

const BusRouteTable = () => {
    const columns = [
        {
            dataField: 'id',
            text: '#'
        },
        {
            dataField: 'number',
            text: 'Номер маршрута'
        },
        {
            dataField: 'perDay',
            text: '% безбилетников за день',
        },
        {
            dataField: 'perWeek',
            text: '% безбилетников за неделю'
        },
        {
            dataField: 'perMonth',
            text: '% безбилетников за месяц'
        },
        {
            dataField: 'increaseDay',
            text: 'Рост эффективности за день',
        },
        {
            dataField: 'increaseWeek',
            text: 'Рост эффективности за неделю'
        },
        {
            dataField: 'increaseMonth',
            text: 'Рост эффективности за месяц'
        }
    ];
    const data = [
        {
            id: '1',
            number: '1',
            perDay: '48',
            perWeek: '1',
            perMonth: '1',
            increaseDay: '43',
            increaseWeek: '100',
            increaseMonth: '1',
        },
        {
            id: '2',
            number: '3',
            perDay: '67',
            perWeek: '1',
            perMonth: '1',
            increaseDay: '98',
            increaseWeek: '100',
            increaseMonth: '1',
        },
        {
            id: '3',
            number: '10',
            perDay: '23',
            perWeek: '1',
            perMonth: '1',
            increaseDay: '54',
            increaseWeek: '100',
            increaseMonth: '1',
        },
        {
            id: '4',
            number: '19',
            perDay: '-65',
            perWeek: '1',
            perMonth: '1',
            increaseDay: '7',
            increaseWeek: '100',
            increaseMonth: '1',
        },
        {
            id: '5',
            number: '28',
            perDay: '33',
            perWeek: '20',
            perMonth: '32',
            increaseDay: '431',
            increaseWeek: '432',
            increaseMonth: '1',
        },
        {
            id: '6',
            number: '39',
            perDay: '11',
            perWeek: '10',
            perMonth: '78',
            increaseDay: '54',
            increaseWeek: '54',
            increaseMonth: '54',
        },
    ]
    return (
        <div style={{ "margin": "50px", "padding": "50px" }}>
            <BootstrapTable keyField='id' data={data} columns={columns}/>
        </div>
    )
}

export default BusRouteTable