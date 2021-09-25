import { useState } from "react"
import { Button } from "react-bootstrap"
import { Modal } from "react-bootstrap"
import BootstrapTable from 'react-bootstrap-table-next'
import { Form, Field } from "react-final-form"

const TasksTable = () => {
    const [isModal, setModal] = useState(false)
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
    const [tableData, setTableData] = useState([{
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
    }])
    const onSubmit = (values) => {
        let result = tableData
        result.push({
            id: tableData.length + 1,
            brigade: values?.brigade,
            district: values?.district,
            busNumber: values?.busNumber,
            busStop: values?.busStop,
        },)
        setTableData(result)
        setModal(false)
      };
    return (
        <div style={{ "margin": "50px", "padding": "50px" }}>
            <Button variant="primary" style={{ "marginBottom": "50px" }} onClick={() => setModal(true)}>Добавить задачу</Button>
            <BootstrapTable keyField='id' data={tableData} columns={columns} />
            <Modal
                show={isModal}
                onHide={() => setModal(false)}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Новая задача
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form
                        onSubmit={onSubmit}
                        render={({ handleSubmit }) => (
                            <form 
                                onSubmit={handleSubmit}
                                className="myForm"
                            >
                                <Field name="brigade">
                                    {({ input }) => (
                                        <div>
                                            <div style={{"padding": "5px"}}><label>Номер бригады</label></div>                      
                                            <div style={{"padding": "5px"}}><input {...input} type="text" placeholder="Номер бригады"/></div>
                                        </div>
                                    )}
                                </Field>
                                <Field name="district">
                                    {({ input }) => (
                                        <div>
                                            <div style={{"padding": "5px"}}><label>Район</label></div>
                                            <div style={{"padding": "5px"}}><input {...input} type="text" placeholder="Район"/></div>
                                        </div>
                                    )}
                                </Field>
                                <Field name="busNumber">
                                    {({ input }) => (
                                        <div>
                                            <div style={{"padding": "5px"}}><label>Номер автобуса</label></div>
                                            <div style={{"padding": "5px"}}><input {...input} type="text" placeholder="Номер автобуса"/></div>
                                        </div>
                                    )}
                                </Field>
                                <Field name="busStop">
                                    {({ input }) => (
                                        <div>
                                            <div style={{"padding": "5px"}}><label>Остановка</label></div>
                                            <div style={{"padding": "5px"}}><input {...input} type="text" placeholder="Остановка"/></div>
                                        </div>
                                    )}
                                </Field>
                                <div  style={{"padding": "5px"}}>
                                    <Button type="submit">
                                        Создать
                                    </Button>
                                </div>
                            </form>
                        )}
                    />
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default TasksTable