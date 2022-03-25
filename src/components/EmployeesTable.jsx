import DataTable from 'react-data-table-component'
import { useState, useMemo } from 'react'
import FilterComponent from './FilterComponent'
import { useSelector } from 'react-redux';



const columns = [
    {
        name: 'First Name',
        selector: row => row.firstname,
        sortable: true
    },
    {
        name: 'Last Name',
        selector: row => row.lastname,
        sortable: true
    },
    {
        name: 'Start Date',
        selector: row => row.startDate,
        sortable: true
    },
    {
        name: 'Department',
        selector: row => row.department,
        sortable: true
    },
    { 
        name: 'Date of Birth',
        selector: row => row.dateOfBirth,
        sortable: true
    },
    {
        name: 'Street',
        selector: row => row.street,
        sortable: true
    },
    {
        name: 'City',
        selector: row => row.city,
        sortable: true
    },
    {
        name: 'State',
        selector: row => row.state,
        sortable: true
    },
    { 
        name: 'Zip Code',
        selector: row => row.zipCode,
        sortable: true
    }
]

const customStyles = {
    subHeader: {
		style: {
			borderRadius: '20px 20px 0px 0px'
		},
	},
    pagination: {
		style: {
			marginTop: '10px',
            backgroundColor: 'transparent',
            border: 'none',
            color: '#272F40'
		},
	},
    headCells: {
        style: {
            color: '#272F40',
            fontSize: '14px'
        }
    }
}


export default function EmployeesTable() {
    const [filterText, setFilterText] = useState('')    
    const employees = useSelector((state) => state.newEmployee.employeeList) || []

    const filteredItems = employees.filter(
		item => item.firstname.toLowerCase().includes(filterText.toLowerCase()) || 
        item.lastname.toLowerCase().includes(filterText.toLowerCase()) ||
        item.department.toLowerCase().includes(filterText.toLowerCase()) ||
        item.dateOfBirth.toLowerCase().includes(filterText.toLowerCase()) ||
        item.startDate.toLowerCase().includes(filterText.toLowerCase()) ||
        item.state.toLowerCase().includes(filterText.toLowerCase()) ||
        item.city.toLowerCase().includes(filterText.toLowerCase()) ||
        item.street.toLowerCase().includes(filterText.toLowerCase()),
	)

    const subHeaderComponentMemo = useMemo(() => {
		return (
			<FilterComponent onFilter={e => setFilterText(e.target.value)}  filterText={filterText} />
		);
	}, [filterText]);

    return(
        <DataTable
            columns={columns}
            data={filteredItems}
            pagination
            subHeader
            subHeaderComponent={subHeaderComponentMemo}
            customStyles={customStyles}
        />
    )
}