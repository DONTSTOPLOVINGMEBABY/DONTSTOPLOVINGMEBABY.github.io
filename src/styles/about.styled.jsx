import styled from "styled-components"


const AboutPageStyled = styled.div`
    width: 100%;
    height: 500px;
    padding: 20px;
    margin-top: 30px;
    display: flex;
    flex-direction: column ; 
`

const AboutInfo = styled.div`
    width: 100%;
    flex: 1;
    display: flex;
`

const PhotoOfMe = styled.img`
    height: 300px;
    border-radius: 50%;
`

export {
    AboutPageStyled,
    PhotoOfMe,  
    AboutInfo, 
}