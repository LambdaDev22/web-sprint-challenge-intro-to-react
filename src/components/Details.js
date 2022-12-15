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
    border-radius: 10px;
    padding: 2%;
`

const StyledPText = styled.p`
    text-align: center;
    padding: 2%;
    font-size: 1.5rem;
    color: black;
`

function Details(props) {
    console.log(props);

    return (
        <>
            <StyledButton onClick={() => props.action()}>Exit</StyledButton>
            <StyledH2>Character Deets</StyledH2>
            <StyledPText>Name: {props.props.name}</StyledPText>
            <StyledPText>Birth Year: {props.props.birth_year}</StyledPText>
            <StyledPText>Eye Color: {props.props.eye_color}</StyledPText>
        </>
    )
}

export default Details;