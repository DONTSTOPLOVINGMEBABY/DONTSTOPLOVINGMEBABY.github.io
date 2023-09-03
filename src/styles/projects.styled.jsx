import styled from "styled-components"

const ProjectSectionStyled = styled.section`
    width: 100%;
    height: 500px;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    margin-bottom: 300px;
    color: #ffffff;
`

const IndividualProject = styled.div`
    height: 100%;
    display: flex;
    margin-top: 24px;
    @media (max-width: 850px) {
        flex-direction: column;
    }
`

const OSFTDemoStyled = styled.div`
    width: 50%;
    height: 100%;
    @media (max-width: 850px) {
        width: 100%;
    }
    padding-left: 12px;
`

const OSFTVideo = styled.video`
    width: 100%;
    border-radius: 10px;
`

const ProjectDetails = styled.div`
    display: flex;
    flex-direction: column;
    height: 100% ; 
    flex: 1;
`

const ProjectTitles = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    color: inherit;
    text-decoration: none;
`

const ProjectMainTitle = styled.h2`
    font-size: 2.25rem;
    color: inherit;
    margin-bottom: 4px;
    font-family: 'Poppins Bold 700';
    margin-top: 0px;
`

const ProjectSubtitle = styled.h3`
    font-size: 1.25rem;
    color: inherit;
    margin-top: 4px;
    margin-bottom: 0px;
    text-decoration: none;
    font-family: 'Poppins Bold 700';
`

const ProjectDescription = styled.div`
    font-size: 1.25rem;
    line-height: 2rem;
    width: 100%;
    text-align: left;
    color: #999999;
    padding: 8px 0px;
`



export { 
    ProjectSectionStyled,
    IndividualProject,
    OSFTDemoStyled, 
    OSFTVideo, 
    ProjectDetails, 
    ProjectTitles, 
    ProjectMainTitle, 
    ProjectSubtitle, 
    ProjectDescription, 
} 