import styled from 'styled-components'
import SearchIcon from '../assets/search.svg'

const Input = styled.input`
    position: relative;
    z-index: 1;
    width: 95%;
    height: 20px;
    background: #FFFFFF;
    border: 1px solid #272F40;
    border-radius: 15px;
    padding: 3px 5px;

    &:focus-visible {
        outline: 3px solid #FFDECB
    }
`

export default function FilterComponent({onFilter}){
    return(
        <div className='table-filter'>
            <img src={SearchIcon} alt="Search icon" />
            <Input onChange={onFilter}></Input>
        </div>
    )
} 