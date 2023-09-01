import { 
    ProjectSectionStyled, 
    IndividualProject, 
} from "../../styles/projects.styled"
import SectionSplitter from "../section-splitter"
import OSFTDemo from "./osft-video"

function ProjectSection () {
    return (
        <ProjectSectionStyled>
            <SectionSplitter name="Projects" side="left" />
            <IndividualProject>
                <OSFTDemo />
            </IndividualProject>
        </ProjectSectionStyled>
    )
}

export default ProjectSection