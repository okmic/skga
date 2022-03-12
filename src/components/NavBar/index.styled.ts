import styled from "styled-components"

export const WrapperNavBar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 200px;
    background-color: #fff;
    padding: 1.5em;
    & a {
        text-decoration: none; 
    };
    @media screen and (max-width: 950px) {
        width: 100%;
        max-width: 100%;
    } 
`
export const ItemNavLink = styled.div`
    text-align: left;
    color: rgb(24, 142, 244);
    font-size: 13px;
    padding: 3px 0;
`