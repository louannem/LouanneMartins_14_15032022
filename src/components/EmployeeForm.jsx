import styled from 'styled-components'

const Label = styled.label `
    display: block;
    margin-top: 1rem;
    margin-bottom: 10px;
`

const Address = styled.fieldset `
    margin-top: 10px;
`

const Form = styled.form`
    margin-bottom: 16px;
    width: 290px
`


export default function EmployeeForm() {
    return(
        <Form action="#" id="create-employee">
                <Label htmlFor="first-name">First Name</Label>
                <input type="text" id="first-name" />

                <Label htmlFor="last-name">Last Name</Label>
                <input type="text" id="last-name" />

                <Label htmlFor="date-of-birth">Date of Birth</Label>
                <input id="date-of-birth" type="date" />

                <Label htmlFor="start-date">Start Date</Label>
                <input id="start-date" type="date" />

                <Address>
                    <legend>Address</legend>

                    <Label htmlFor="street">Street</Label>
                    <input id="street" type="text" />

                    <Label htmlFor="city">City</Label>
                    <input id="city" type="text" />

                    <Label htmlFor="state">State</Label>
                    <select name="state" id="state"></select>

                    <Label htmlFor="zip-code">Zip Code</Label>
                    <input id="zip-code" type="number" />
                </Address>

                <Label htmlFor="department">Department</Label>
                <select name="department" id="department">
                    <option>Sales</option>
                    <option>Marketing</option>
                    <option>Engineering</option>
                    <option>Human Resources</option>
                    <option>Legal</option>
                </select>
        </Form>
    )
}