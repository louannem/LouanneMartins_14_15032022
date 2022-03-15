import DataTable from 'react-data-table-component'
import { useState, useMemo } from 'react'
import FilterComponent from './FilterComponent';

const caseInsensitiveSort = (rowA, rowB) => {
    const a = rowA.firstname.toLowerCase();
    const b = rowB.firstname.toLowerCase();

    if (a > b) {
        return 1;
    }

    if (b > a) {
        return -1;
    }

    return 0;
};

const columns = [
    {
        name: 'First Name',
        selector: row => row.firstname,
        sortable: true,
        sortFunction: caseInsensitiveSort
    },
    {
        name: 'Last Name',
        selector: row => row.lastname,
    },
    {
        name: 'Start Date',
        selector: row => row.startDate
    },
    {
        name: 'Department',
        selector: row => row.department
    },
    { 
        name: 'Date of Birth',
        selector: row => row.birth
    },
    {
        name: 'Street',
        selector: row => row.street
    },
    {
        name: 'City',
        selector: row => row.city
    },
    {
        name: 'State',
        selector: row => row.state
    },
    { 
        name: 'Zip Code',
        selector: row => row.zip
    }
];

const data = [
    {
        id: 1,
        firstname: 'Beetlejuice',
        birth: '1988',
    },
    {
        id: 2,
        firstname: 'Ghostbusters',
        birth: '1984',
    },
]


export default function EmployeesTable() {
    const [filterText, setFilterText] = useState('')
    const [resetPaginationToggle, setResetPaginationToggle] = useState(false)
    const filteredItems = data.filter(
		item => item.firstname.toLowerCase().includes(filterText.toLowerCase()),
	)

    const subHeaderComponentMemo = useMemo(() => {
		return (
			<FilterComponent onFilter={e => setFilterText(e.target.value)}  filterText={filterText} />
		);
	}, [filterText, resetPaginationToggle]);

    return(
        <DataTable
            columns={columns}
            data={filteredItems}
            pagination
            subHeader
            subHeaderComponent={subHeaderComponentMemo}
        />
    )
}