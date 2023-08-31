import styled from "styled-components"

const WelcomeAnimationStyled = styled.section`
    width: 100%;
    height: 100% ; 
    display: flex;
    justify-content: center;
    align-items: center;
`

const MessageWrapper = styled.div`
    height: 300px;
    width: 100%;
    position: relative;
    overflow: hidden;
`

const CenterMessage = styled.div`
    display: flex;
    justify-content: center;
    height: fit-content;
    width: 100%;
    font-size: 5rem;
    color: #F8EFD4;
`


export {
    WelcomeAnimationStyled,
    MessageWrapper,
    CenterMessage,  
}