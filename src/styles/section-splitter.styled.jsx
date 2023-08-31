import styled from "styled-components"

const SectionSplitterStyled = styled.div`
    display: flex;
    width: 100%;
`

const BlankFiller = styled.div`
    width: 50%;
`

const NameSection = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Name = styled.div`
    width: fit-content;
    margin-right: 20px;
    font-size: 2rem;
`

const Line = styled.div`
    flex: 1;
    height: 1px;
    background-color: white;
`


export {
    SectionSplitterStyled, 
    BlankFiller, 
    NameSection,
    Name, 
    Line, 
}