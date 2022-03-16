import { Link } from "react-router-dom"
import styled from "styled-components"

const ClassicButton = styled.button`
    min-width: 80px;
    margin: 10px 0px;
    font-size: 13px;
    border: 0px solid #272F40;
    padding: 8px;
    background: white;
    border-radius: 100px;
    cursor: pointer;
    filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.1))
`

export default function Button({text, path}) {
    return(
        <Link to={path}>
            <ClassicButton>{text}</ClassicButton>
        </Link>
    )
}