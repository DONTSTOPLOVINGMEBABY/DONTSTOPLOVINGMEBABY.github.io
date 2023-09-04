import styled from "styled-components"

const HeaderStyled = styled.header`
    width: 100%;
    height: 56px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #ffffff;
`

const Name = styled.h1`
    padding: 0;
    margin: 0;
    font-size: 2rem;
    font-family: 'Poppins Bold 700';
`

const NavBar = styled.nav`
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: fit-content;
`

const NavItem = styled.button`
    background-color: inherit;
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 1rem;
    text-decoration: underline;
    margin: 6px;
    color: #ffffff;
    text-align: center;
`

export { 
    HeaderStyled, 
    Name,  
    NavBar, 
    NavItem
}