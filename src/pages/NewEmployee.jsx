import FormHeader from "../components/formHeader";
import styled from "styled-components"
import EmployeeForm from "../components/EmployeeForm";
import Button from "../components/Button";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const ValidateForm = styled.button`
    
`

export default function NewEmployee() {
    return(
        <div>
            <FormHeader />
            <Container>
                <Button path="/employees-list" text="View Current Employees"/>
                <h2>Create Employee</h2>
                <EmployeeForm />
                <ValidateForm>Save</ValidateForm>
            </Container>
        </div>   
    )
}