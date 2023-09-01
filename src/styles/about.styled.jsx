import styled from "styled-components"


const AboutPageStyled = styled.section`
    width: 100%;
    height: fit-content ; 
    padding: 20px;
    margin-top: 30px;
    display: flex;
    flex-direction: column ; 
`

const AboutInfo = styled.div`
    padding: 20px 0;
    width: 100%;
    flex: 1;
    display: flex;
    @media (max-width: 850px) {
        flex-direction: column;
    }
`

const WrapPhoto = styled.div`
    flex: 1;
    width: fit-content;
    margin-right: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 850px) {
        width: 100%;
        justify-content: center;
    }
`

const PhotoOfMe = styled.img`
    height: 100%;
    max-height: 500px;
    border-radius: 20px;
    object-fit: contain;
    @media (max-width: 850px) {
        margin-bottom: 20px;
    }
`

const DescribeMyself = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;

    @media (max-width: 850px){
        width: 100%;
        justify-content: center;
    }

`

const Bio = styled.article`
    font-size: 1.15rem;
    line-height: 2rem;
    flex: 1;
    text-align: left;
    color: #999999;
    @media (max-width: 850px) {
        text-align: center;
    }
`

const ScrollerContainer = styled.div`
    margin: 30px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h3 {
        font-family: 'Big Shoulders Stencil Display', cursive;
        font-size: 24px;
        font-weight: 400;
        text-align: center;
    }

`


export {
    AboutPageStyled,
    WrapPhoto, 
    PhotoOfMe,  
    AboutInfo, 
    Bio, 
    ScrollerContainer, 
    DescribeMyself, 
}