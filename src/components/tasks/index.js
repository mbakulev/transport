import { useState } from "react"
import { Table, Button, Form } from "react-bootstrap"
import { Modal } from "react-bootstrap"
import BootstrapTable from 'react-bootstrap-table-next'

const TasksTable = () => {
    const [isModal, setModal] = useState(false)
    // const [brigadeNumber, setBrigadeNumber] = useState(),
    //     onInputBrigade = ({ target: { value } }) => setBrigadeNumber(value),
    //     onFormSubmit = e => {
    //         e.preventDefault()
    //         console.log(brigadeNumber)
    //         setBrigadeNumber()
    //     }
    // const [districtNumber, setDistrictNumber] = useState(),
    //     onInputDistrict = ({ target: { value } }) => setDistrictNumber(value),
    //     onFormSubmit = e => {
    //         e.preventDefault()
    //         console.log(value)
    //         setDistrictNumber()
    //     }
    // const [value, setValue] = useState(),
    //     onInput = ({ target: { value } }) => setValue(value),
    //     onFormSubmit = e => {
    //         e.preventDefault()
    //         console.log(value)
    //         setValue()
    //     }
    // const [value, setValue] = useState(),
    //     onInput = ({ target: { value } }) => setValue(value),
    //     onFormSubmit = e => {
    //         e.preventDefault()
    //         console.log(value)
    //         setValue()
    //     }
    const columns = [
        {
            dataField: 'id',
            text: '#'
        },
        {
            dataField: 'brigade',
            text: 'Название бригады'
        },
        {
            dataField: 'district',
            text: 'Район',
        },
        {
            dataField: 'busNumber',
            text: 'Номер автобуса'
        },
        {
            dataField: 'busStop',
            text: 'Остановка автобуса'
        }
    ];
    const data = [
        {
            id: '1',
            brigade: 'Бригада 1',
            district: '100',
            busNumber: '1',
            busStop: 'Вишневая'
        },
        {
            id: '2',
            brigade: 'Бригада 2',
            district: '200',
            busNumber: '2',
            busStop: 'Малиновая'
        },
    ]
    const handleSubmitForm = (evt) => {
        console.log(evt)
    }

    return (
        <div style={{ "margin": "50px", "padding": "50px" }}>
            <Button variant="primary" style={{ "marginBottom": "50px" }} onClick={() => setModal(true)}>Добавить задачу</Button>
            <BootstrapTable keyField='id' data={data} columns={columns} />
            {/* <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td colSpan="2">Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </Table> */}
            <Modal
                size="lg"
                show={isModal}
                onHide={() => setModal(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Новая задача
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onClick={handleSubmitForm}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                    {/* <Form onSubmit={onFormSubmit}>
                        <Form.Control
                            type="text"
                            onChange={onInputBrigade}
                            value={brigadeNumber}
                        />
                        <Form.Control
                            type="text"
                            onChange={onInputDistrict}
                            value={districtNumber}
                        />
                        <Form.Control
                            type="text"
                            onChange={onInput}
                            value={value}
                        />
                        <Form.Control
                            type="text"
                            onChange={onInput}
                            value={value}
                        />
                        <Button type="submit">
                            Submit
                        </Button>
                    </Form> */}
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default TasksTable