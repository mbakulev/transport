import { useState } from "react"
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap"
import Map from "../map"
import BusTable from "../bus"
import InspectorsTable from "../inspectors"
import BusRouteTable from "../busRoute"
import BrigadeTable from "../brigade"
import TasksTable from "../tasks"

const Admin = () => {

    const [pageNumber, setPageNumber] = useState(1)
    const changePage = pageNumber => {
        setPageNumber(pageNumber)
    }

    const renderComponentPage = () => {
        switch(pageNumber) {
            case 1: {
                return <Map /> 
            }
            case 2: {
                return <TasksTable /> 
            }
            case 3: {
                return <InspectorsTable /> 
            }
            case 4: {
                return <BrigadeTable /> 
            }
            case 5: {
                return <BusTable /> 
            }
            case 6: {
                return <BusRouteTable /> 
            }
        }
        
    }

    return (
        <div> 
            <Navbar bg="dark" expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand onClick={() => changePage(1)}>Контролер Админ</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link onClick={() => changePage(1)}>Мониторинг</Nav.Link>
                            <Nav.Link onClick={() => changePage(2)}>Задания</Nav.Link>
                            <Nav.Link onClick={() => changePage(3)}>Контролеры</Nav.Link>
                            <Nav.Link onClick={() => changePage(4)}>Бригады</Nav.Link>
                            <Nav.Link onClick={() => changePage(5)}>Автобусы</Nav.Link>
                            <Nav.Link onClick={() => changePage(6)}>Маршруты</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div>
                {renderComponentPage()}
            </div>
        </div>
    )
}

export default Admin