import styled from 'styled-components'
import Button from '../components/Button'
import { ClassicButton } from '../components/Button'
import EmployeesTable from '../components/EmployeesTable'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const ButtonsWrapper = styled.div`
    width: 300px;
    margin: auto;

    &>* {
        margin: 0px 10px!important;
    }
`

export default function EmployeesList() {
    return(
        <Container>
            <h1>Current Employees</h1>
            <EmployeesTable />
            <ButtonsWrapper>
                <Button path="/" text="Home"/>
                <ClassicButton onClick={() => {
                    localStorage.clear()
                    window.location.reload(false)
                    }}>Clear localstorage</ClassicButton>
            </ButtonsWrapper>
            
        </Container>
        
    )
}