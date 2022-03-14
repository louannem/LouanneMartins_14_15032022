import styled from "styled-components"

const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`


export default function FormHeader() {
    return(
        <Title>
            <h1>HRnet</h1>
        </Title>
    )
}