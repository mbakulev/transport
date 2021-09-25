import { Table } from "react-bootstrap"

const InspectorsTable = () => {
    return (
        <div style={{ "margin": "50px", "padding": "50px" }}>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Имя</th>
                        <th>Фамилия</th>
                        <th>Номер бригады</th>
                        <th>Количество штрафов</th>
                        <th>Округ</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Иванов</td>
                        <td>Иван</td>
                        <td>1</td>
                        <td>10</td>
                        <td>Первый</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Петров</td>
                        <td>Петр</td>
                        <td>2</td>
                        <td>20</td>
                        <td>Второй</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Пупкин</td>
                        <td>Василий</td>
                        <td>3</td>
                        <td>30</td>
                        <td>Третий</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Васильева</td>
                        <td>Анна</td>
                        <td>2</td>
                        <td>30</td>
                        <td>Второй</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default InspectorsTable