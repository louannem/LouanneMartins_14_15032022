import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { states } from '../utils/constants'
import Modal from './Modal'

const Label = styled.label `
    display: block;
    margin-top: 1rem;
    margin-bottom: 10px;
    font-size: 18px;
    color: #272F40
`

const Input = styled.input`
    width: 100%;
    height: 20px;
    background: #FFFFFF;
    border: 1px solid #272F40;
    border-radius: 15px;
    padding: 5px;

    &:focus-visible {
        outline: 3px solid #FFDECB
    }
`

const Select = styled.select`
    height: 30px;
    background-color: #272F40;
    border: none;
    border-radius: 2px;
    color: #EAE7F8;
    padding: 5px;
    box-sizing: border-box
`

const FormGroup = styled.div`
    display: flex;  
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 10px
`

const InputGroup = styled.div`
    width: 45%;
`

const Address = styled.fieldset `
    margin-top: 10px;
    border: none;
    background: white;
    padding: 10px;
    border-radius: 5px;
`
const Legend = styled.legend`
    margin-top: 0;
    position: relative;
    top: 20px;
    left: 10px;
    font-size: 18px;
    border-bottom: 2px solid #EAE7F8;
    width: 95%;
`

const Form = styled.form`
    margin-bottom: 16px;
    width: 700px;
    padding: 35px 75px;
    background: rgba(255, 255, 255, 0.8);
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.15);
    backdrop-filter: blur(7px);
    border-radius: 50px;
    box-sizing: border-box;
`

const SubmitButton = styled.div`
    width: 100%;
    display : flex;
    align-items: center;
    justify-content: center;
    margin: 10px 0px
`


export default function EmployeeForm() {
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [dateOfBirth, setBirth] = useState('')
    const [startDate, setStart] = useState('')
    const [street, setStreet] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [zipCode, setCode] = useState('')
    const [department, setDepartment] = useState('')

    const [isOpen, setOpen] = useState(false)
  

    const openModal = () => { setOpen(true) }
    const closeModal = (e) => { e.preventDefault(); setOpen(false); console.log(isOpen) }

    const employees = JSON.parse(localStorage.getItem('employees')) || []

    const handleSubmit = (e) => {
        e.preventDefault()

        const employee = {
            firstname,
            lastname,
            dateOfBirth,
            startDate,
            street,
            city,
            state,
            zipCode,
            department
        }

        employees.push(employee)
        localStorage.setItem('employees', JSON.stringify(employees))
        openModal()
    }

    

    useEffect(() => {
        const stateSelect = document.getElementById('state');
        states.forEach(function(state) {
            const option = document.createElement('option');
            option.value = state.abbreviation;
            option.text = state.name;
            stateSelect.appendChild(option);
        })
    }, [isOpen])

    return(
        <div>
            <Form  id="create-employee" onSubmit={handleSubmit}>
                <FormGroup>
                    <InputGroup>
                        <Label htmlFor="first-name">First Name</Label>
                        <Input type="text" id="first-name" onChange={(e) => setFirstname(e.target.value) } />
                    </InputGroup>
                   
                    <InputGroup>
                        <Label htmlFor="last-name">Last Name</Label>
                        <Input type="text" id="last-name" onChange={(e) =>  setLastname(e.target.value) } />
                    </InputGroup>
                    
                    <InputGroup>
                        <Label htmlFor="date-of-birth">Date of Birth</Label>
                        <Input id="date-of-birth" type="date" onChange={(e) => setBirth(e.target.value)} />
                    </InputGroup>

                    <InputGroup>
                        <Label htmlFor="start-date">Start Date</Label>
                        <Input id="start-date" type="date" onChange={(e) => setStart(e.target.value) } />
                    </InputGroup>
                
                </FormGroup>
                    

                    <Address>
                        <Legend>Address</Legend>
                            <FormGroup>
                            <InputGroup>
                                <Label htmlFor="street">Street</Label>
                                <Input id="street" type="text" onChange={(e) => setStreet(e.target.value) } />

                                <Label htmlFor="city">City</Label>
                                <Input id="city" type="text" onChange={(e) => setCity(e.target.value) } />
                            </InputGroup>

                            <InputGroup>
                                    <Label htmlFor="state">State</Label>
                                    <Select name="state" id="state" defaultValue="Alabama" onChange={(e) => setState(e.target.value)}></Select>

                                    <Label htmlFor="zip-code">Zip Code</Label>
                                    <Input id="zip-code" type="number" onChange={(e) => setCode(e.target.value) } />
                            </InputGroup>  
                        </FormGroup>
                                              
                    </Address>

                    <Label htmlFor="department">Department</Label>
                    <Select name="department" id="department" defaultValue="Sales" onChange={(e) => setDepartment(e.target.value)}>
                        <option >Sales</option>
                        <option>Marketing</option>
                        <option>Engineering</option>
                        <option>Human Resources</option>
                        <option>Legal</option>
                    </Select>
                    
                    <SubmitButton>
                       <button className='submit-button'>Save</button> 
                    </SubmitButton>
                    
                    
            </Form>
            <Modal show={isOpen} handleClose={closeModal}  />
        </div>
    )
}