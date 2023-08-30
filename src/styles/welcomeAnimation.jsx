import styled from "styled-components"

const WelcomeAnimationStyled = styled.section`
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const MessageWrapper = styled.div`
    height: 300px;
    width: 300px;
    position: relative;
    overflow: hidden;
`

const CenterMessage = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%;
    font-size: 2rem;
    color: white;
`


export {
    WelcomeAnimationStyled,
    MessageWrapper,
    CenterMessage,  
}