import styled from 'styled-components'

const Input = styled.input`
    height: 10px;
    background: #FFFFFF;
    border: 1px solid #272F40;
    border-radius: 15px;
    padding: 5px;

    &:focus-visible {
        outline: 3px solid #FFDECB
    }
`

export default function FilterComponent({onFilter}){
    return(
        <div>
            <span>Search : </span>
            <Input onChange={onFilter}></Input>
        </div>
    )
} 