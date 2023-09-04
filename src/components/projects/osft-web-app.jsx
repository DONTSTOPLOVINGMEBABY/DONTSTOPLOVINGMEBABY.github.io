import { 
    IndividualProject, 
    ProjectDetails,
    ProjectTitles, 
    ProjectMainTitle, 
    ProjectSubtitle,
    ProjectDescription, 
    BuiltWithIcons, 
    ProjectLink, 
    ProjectLinks, 
} from "../../styles/projects.styled"
import TechStackIcon from "./tech-stack-icon"
import OSFTDemo from "./osft-video"
import express_svg from "../../assets/express.svg"
import javascript_svg from "../../assets/javascript.svg"
import mongodb_svg from "../../assets/mongodb.svg"
import nodejs_svg from "../../assets/nodejs.svg"
import react_svg from "../../assets/react.svg"
import redis_svg from "../../assets/redis.svg"

function OSFTWebApp () {
    return (
        <IndividualProject>
                <ProjectDetails>
                    <ProjectTitles>
                        <ProjectMainTitle>
                            Open Source Feature Toggles (OSFT)
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
                    <BuiltWithIcons>
                        <TechStackIcon icon={mongodb_svg} name="MongoDB"/>
                        <TechStackIcon icon={redis_svg} name="Redis"/>
                        <TechStackIcon icon={nodejs_svg} name="NodeJS"/>
                        <TechStackIcon icon={express_svg} name="ExpressJS"/>
                        <TechStackIcon icon={react_svg} name="React"/>
                        <TechStackIcon icon={javascript_svg} name="Javascript"/>
                    </BuiltWithIcons>
                    <ProjectLinks>
                        <ProjectLink target="_blank" href="https://opensourcefeaturetoggles.com/home">Use OSFT</ProjectLink>
                        <ProjectLink target="_blank" href="https://github.com/DONTSTOPLOVINGMEBABY/OSFT-Web-Application">View Source Code</ProjectLink>
                    </ProjectLinks>
                </ProjectDetails>
                <OSFTDemo />
            </IndividualProject>
    )
}

export default OSFTWebApp