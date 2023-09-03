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

function ProjectSection () {
    return (
        <ProjectSectionStyled>
            <SectionSplitter name="Projects" side="left" />
            <IndividualProject>
                    <ProjectDetails>
                        <ProjectTitles>
                            <ProjectMainTitle>
                                OSFT 
                            </ProjectMainTitle>
                            <ProjectSubtitle>
                                Full Stack Web App
                            </ProjectSubtitle>
                        </ProjectTitles>
                        <ProjectDescription>
                                OSFT is an open source feature flagging service that allows developers to embed highly performant and scalable feature toggles directly into their Javascript and React Applications. 
                        </ProjectDescription>
                        <ProjectSubtitle>
                            Built With
                        </ProjectSubtitle>
                    </ProjectDetails>
                    <OSFTDemo />
            </IndividualProject>
        </ProjectSectionStyled>
    )
}

export default ProjectSection