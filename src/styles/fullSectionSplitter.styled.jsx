import styled from "styled-components"

const FullSectionSplitterStyled = styled.header`
    display: flex;
    width: 100%;
    height: fit-content;
    align-items: center;
    font-family: 'Poppins';
    margin-top: ${props => props.$margintop ? props.$margintop : '0px' } ;
`

const LineFiller = styled.div`
    flex: 1;
`

const NameSection = styled.h2`
    width: fit-content;
    padding: 0 10px;
    margin: 0px;
    height: 1px;
    background-color: white;
`

export {
    FullSectionSplitterStyled, 
    LineFiller,
    NameSection, 
}