import { 
    BuiltWithIcons,
    IndividualProject, 
    ProjectDescription, 
    ProjectDetails,
    ProjectLink,
    ProjectLinks,
    ProjectMainTitle,
    ProjectSubtitle,
    ProjectTitles, 
} from "../../styles/projects.styled";
import ProjectVideoDemo from "./osft-video";
import TechStackIcon from "./tech-stack-icon";
import firebase_svg from '../../assets/firebase.svg'
import javascript_svg from "../../assets/javascript.svg"
import react_svg from "../../assets/react.svg"

function FYTExample () {
    return (
        <IndividualProject marginTop='40px'>
            <ProjectDetails>
                <ProjectTitles>
                    <ProjectMainTitle>
                        React YouTube Clone
                    </ProjectMainTitle>
                    <ProjectSubtitle>
                        A React + Firebase Project
                    </ProjectSubtitle>
                </ProjectTitles>
                <ProjectDescription>
                    This React YouTube clone (dubbed Fake-YouTube) uses Cloud Firestore, Firebase storage, and React to grant users much of the same functionality they can get on actual YouTube including sharing videos, subscribing to channels, and interacting with user generated content via likes and comments. 
                </ProjectDescription>
                <ProjectSubtitle>
                    Built With
                </ProjectSubtitle>
                <BuiltWithIcons>
                    <TechStackIcon icon={firebase_svg} name="Firebase"/>
                    <TechStackIcon icon={javascript_svg} name="Javascript"/>
                    <TechStackIcon icon={react_svg} name="React"/>
                </BuiltWithIcons>
                <ProjectLinks>
                    <ProjectLink target="_blank" href="https://henryjacobs.us/React-YouTube-Clone/">Surf Fake-YouTube</ProjectLink>
                    <ProjectLink target="_blank" href="https://github.com/DONTSTOPLOVINGMEBABY/React-YouTube-Clone">View Source Code</ProjectLink>
                </ProjectLinks>
            </ProjectDetails>
            <ProjectVideoDemo
            watch_url="https://hjacobs-rest-api-production.up.railway.app/fyt/demo"
            />
        </IndividualProject>
    )
}

export default FYTExample

/* 
Successfully designed and built a fully functional YouTube clone using
React, Firestore, and Firebase storage.
Implemented functionality that allows users to create and register
accounts, upload and watch content, interact with content through likes
and comments, and search for specific videos/channels

*/