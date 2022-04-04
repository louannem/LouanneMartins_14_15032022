import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { states, departments } from '../utils/constants'
import Modal from './Modal'

import { employeeInfo } from '../redux/newEmployee'
import SelectComponent from './SelectComponent'
//import DatePicker from './DatePicker'
import { DatePicker } from 'datepicker-library-oc'
import "datepicker-library-oc/dist/index.css"

const FormTitle = styled.h2`
    text-align: center;
    font-size: 35px;
    color: #272F40;
    margin: 0px 0px 25px 0px;
`
const Label = styled.label `
    position: relative;
    z-index: 1;
    display: block;
    margin-top: 1rem;
    margin-bottom: 10px;
    font-size: 18px;
    color: #272F40
`

const Input = styled.input`
    position: relative;
    z-index: 1;
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
    position: relative;
    margin-bottom: 16px;
    width: 700px;
    padding: 35px 75px;
    background: rgba(255, 255, 255, 0.8);
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.15);
    backdrop-filter: blur(7px);
    border-radius: 30px;
    box-sizing: border-box;
`

const SubmitButton = styled.div`
    width: 100%;
    display : flex;
    align-items: center;
    justify-content: center;
    margin: 35px 0px 0px 15px;
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
  
    const dispatch = useDispatch()

    const openModal = () => { setOpen(true) }
    const closeModal = (e) => { e.preventDefault(); setOpen(false) }

    const employees = []

    /**
     * Submit the form
     * @param {*} e 
     */
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
        dispatch(employeeInfo(employee))
        openModal()
    }

    const getState = (data) => {
        setState(data)
    }
    const getDepartment = (data) => {
        setDepartment(data)
    }


    const getBirth = (date) => { setBirth(date)}
    const getStart = (date) => { setStart(date)}

    useEffect(() => {
        console.log(startDate)
    }, [startDate])

    return(
        <div>
            <Form  id="create-employee" onSubmit={handleSubmit}>
                <FormTitle>Create Employee</FormTitle>
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
                        <DatePicker  onChange={getBirth} labelID="date-of-birth" startMonth={0} startYear={1960} closeButton={false} />
                    </InputGroup>

                    <InputGroup>
                        <Label htmlFor="start-date">Start Date</Label>
                        <DatePicker onChange={getStart} labelID="start-date" closeButton={false} />
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
                                    <SelectComponent defaultText="Alabama" optionsList={states} getOption={getState} />

                                    <Label htmlFor="zip-code">Zip Code</Label>
                                    <Input id="zip-code" type="number" onChange={(e) => setCode(e.target.value) } />
                            </InputGroup>  
                        </FormGroup>
                                              
                    </Address>

                    <Label htmlFor="department">Department</Label>
                    <SelectComponent defaultText="Sales" optionsList={departments} getOption={getDepartment} />

                    
                    
                    <SubmitButton>
                       <button className='submit-button'>Save</button> 
                    </SubmitButton>
                    
                    
            </Form>
            <Modal show={isOpen} handleClose={closeModal}  />
        </div>
    )
}