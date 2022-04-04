import { createEmployeeReducer } from "./store";
import { store } from "./store";
import {render, screen} from '@testing-library/react';
import { Provider } from "react-redux";
import EmployeesTable from "../components/EmployeesTable";

describe('Create employee reducer', () => {
    it('should return the initial state when state is undefined', () => {
        expect(createEmployeeReducer(undefined, {type: '@INIT'})).toEqual({
            employeeList : [],
            newEmployee : null
        })
    })
    it('should read no result on the table component', () => {
        render(<Provider store={store}><EmployeesTable /></Provider>)
        expect(screen.getByText('There are no records to display')).toBeInTheDocument()
    })
})
