import { Link } from "react-router-dom"
import styled from "styled-components"

const ClassicButton = styled.button`
    font-size: 12px;
    border: 2px solid #272F40;
    padding: 5px;
    background: white;
    border-radius: 100px;
    cursor: pointer;
`

export default function Button({text, path}) {
    return(
        <Link to={path}>
            <ClassicButton>{text}</ClassicButton>
        </Link>
    )
}