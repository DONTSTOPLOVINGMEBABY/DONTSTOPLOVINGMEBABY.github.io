import styled from "styled-components"

const ProjectSectionStyled = styled.section`
    width: 100%;
    height: 500px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    margin-top: 30px;
`

const IndividualProject = styled.div`
    height: 100%;
    display: flex;

    @media (max-width: 850px) {
        flex-direction: column;
    }
`

const OSFTDemoStyled = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 850px) {
        width: 100%;
    }
`

const OSFTVideo = styled.video`
    width: 100%;
    height: fit-content;
    border-radius: 10px;
`



export { 
    ProjectSectionStyled,
    IndividualProject,
    OSFTDemoStyled, 
    OSFTVideo, 
} 