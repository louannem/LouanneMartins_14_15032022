import styled from 'styled-components'
import Button from '../components/Button'
import EmployeesTable from '../components/EmployeesTable'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`


export default function EmployeesList() {
    return(
        <Container>
            <h1>Current Employees</h1>
            <EmployeesTable />
            <Button path="/" text="Home"/>
            <button onClick={() => {
                localStorage.clear()
                window.location.reload(false)
                }}>Clear localstorage</button>
        </Container>
        
    )
}