import React from "react";
import styled from "styled-components";

const StyledH2 = styled.h2`
    font-size: 2rem;
    padding: 3%;
`

const StyledButton = styled.button`
    width: 15%;
    align-self: flex-end;
    background-color: gray;
    border-radius: 10px
`

function Details(props) {
    console.log(props);

    return (
        <>
            <StyledButton onClick={() => props.action()}>Button Name</StyledButton>
            <StyledH2>Character Deets</StyledH2>
            <p>Name: {props.props.name}</p>
            <p>Birth Year: {props.props.birth_year}</p>
            <p>Eye Color: {props.props.eye_color}</p>
        </>
    )
}

export default Deets;