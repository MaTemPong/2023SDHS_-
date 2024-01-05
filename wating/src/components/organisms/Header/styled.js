import styled from "styled-components";

export const StyledHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-color: gray;
    >*{
        width: calc(100vw/3);
    }
`

export const Menu = styled.ul`
    display: flex;
    gap: 0.5rem;
    justify-content: center;
`

