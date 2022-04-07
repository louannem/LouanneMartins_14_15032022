import { useEffect, useState } from "react"
import styled from 'styled-components'
import chevronDown from '../assets/chevron-down.svg'
import chevronUp from '../assets/chevron-up.svg'

const MainWrapper = styled.div`
    position: relative;
    z-index: 3;
    width: 248px;
    cursor: pointer;
    color: #EAE7F8;
`
const SelectHeader = styled.div`
    height: 30px;
    background-color: #272F40;
    border: none;
    border-radius: 2px;
    padding: 5px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;

    & > img {
        width: 12px
    }
`
const DropdownListContainer = styled.div``
const DropDownList = styled.div`
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 200px;
    overflow: auto;
`

const ListItem = styled.div`
    height: 30px;
    background-color: #272F40;
    border: none;
    padding: 5px;
    box-sizing: border-box;

    &:hover {
        background-color: #EAE7F8!important;
        color: #272F40!important;
    }
`
/**
 * Select component for React app
 * @param {string} defaultText Default option/text to show before opening the dropdown
 * @param {array} optionList Lists of option to put into the dropdown menu
 * @param {function} getOption Function to retreive the selected option
 * @returns JSX component
 */
export default function SelectComponent({defaultText, optionsList, getOption}) {
    const [isOpen, setIsOpen] = useState(false)
    const [selectedOption, setSelected] = useState(null)

    const handleToggle = () => { setIsOpen(!isOpen) }

    const onOptionClicked  = value => () => {
        setSelected(value)
        setIsOpen(false)
    }

    useEffect(() => {
        getOption(selectedOption || defaultText)
    })
    

    return(
        <MainWrapper>
            < SelectHeader 
                onClick={handleToggle}> 
                {selectedOption || defaultText} 
                {!isOpen ? <img src={chevronDown} alt="Closed select menu"/> 
                :           <img src={chevronUp} alt="Opened select menu" />
                }
            </SelectHeader>
            { isOpen && (
                <DropdownListContainer>
                    <DropDownList>
                        {optionsList.map(option => (
                            <ListItem onClick={onOptionClicked(option.name)} key={Math.random()}>
                                {option.name}
                            </ListItem>
                        ))}
                        
                    </DropDownList>
                </DropdownListContainer>
            )}
        </MainWrapper>
    )

}