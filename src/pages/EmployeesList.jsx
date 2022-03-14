import styled from 'styled-components'
import Button from '../components/Button'

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
            <table id="employee-table" className="display"></table>
            <Button path="/" text="Home"/>
        </Container>
        
    )
}