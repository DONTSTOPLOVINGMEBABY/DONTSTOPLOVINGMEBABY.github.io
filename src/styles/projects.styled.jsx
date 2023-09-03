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
    padding: 12px 0px;
`

const BuiltWithIcons = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 16px;
`

const IconBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const IndividualIcon = styled.img`
    height: 70px;
    width: 70px;
`

const IconName = styled.span`   
    margin-top: 4px;
    font-family: 'Poppins';
    font-weight: 700;
`

const ProjectLinks = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    margin-top: 18px;
`

const ProjectLink = styled.a`
    height: 40px;
    width: 200px;
    border: 2px white solid;
    color: #ffffff;
    text-decoration: none ;  
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
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
    BuiltWithIcons, 
    IconBox, 
    IndividualIcon, 
    IconName, 
    ProjectLinks, 
    ProjectLink, 
} 