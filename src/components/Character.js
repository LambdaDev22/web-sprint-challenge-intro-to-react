// Write your Character component here
import React from "react";
import styled from "styled-components";

const StyledH2 = styled.h2`
    font-size: 2.25rem;
    background: gray;
    border: 3px solid black;
    padding: 3%;
    border-radius: 3px;
    &:hover {
        background: white;
    }
`

function Character(props) {
    return (
        <>
            <StyledH2 onClick={() => props.action(props.props.key)}>{props.props.name}</StyledH2>
        </>
    )
}

export default Character;