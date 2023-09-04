import { 
    ProjectSectionStyled, 
    IndividualProject, 
    ProjectDetails,
    ProjectTitles, 
    ProjectMainTitle, 
    ProjectSubtitle,
    ProjectDescription, 
} from "../../styles/projects.styled"
import SectionSplitter from "../section-splitter"
import OSFTDemo from "./osft-video"
import OSFTWebApp from "./osft-web-app"
import OSFTReactSDK from "./osft-react-sdk"

function ProjectSection () {
    return (
        <ProjectSectionStyled>
            <SectionSplitter name="Projects" side="left" />
            <OSFTWebApp />
            <OSFTReactSDK /> 
        </ProjectSectionStyled>
    )
}

export default ProjectSection