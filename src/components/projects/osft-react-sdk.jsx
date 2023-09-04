import { 
    BuiltWithIcons,
    IndividualProject, 
    ProjectDescription, 
    ProjectDetails, 
    ProjectLink, 
    ProjectLinks, 
    ProjectMainTitle, 
    ProjectSubtitle, 
} from "../../styles/projects.styled";
import CodeExample from "./code-example";
import TechStackIcon from "./tech-stack-icon";
import javascript_svg from "../../assets/javascript.svg"
import react_svg from '../../assets/react.svg'
import npm_svg from '../../assets/npm.svg'
import vite_svg from '../../assets/vite.svg'
import babel_svg from '../../assets/babel.svg'

function OSFTReactSDK () {
    return (
        <IndividualProject>
            <ProjectDetails>
                <ProjectSubtitle>
                    JS Client & React SDK
                </ProjectSubtitle>
                <ProjectDescription>
                    OSFT offers both a Javascript client and a React SDK that developers can use to implement
                    feature toggles in their applications, both hosted on NPM. 
                </ProjectDescription>
                <ProjectSubtitle>
                    Built With
                </ProjectSubtitle>
                <BuiltWithIcons>
                    <TechStackIcon icon={javascript_svg} name='Javascript'/>
                    <TechStackIcon icon={react_svg} name='React'/>
                    <TechStackIcon icon={vite_svg} name='Vite'/>
                    <TechStackIcon icon={babel_svg} name='Babel'/>
                    <TechStackIcon icon={npm_svg} name='NPM'/>
                </BuiltWithIcons>
                <ProjectLinks>
                    <ProjectLink target="_blank" href="https://www.npmjs.com/package/osff-js-sdk">JS Client on NPM</ProjectLink>
                    <ProjectLink target="_blank" href="https://www.npmjs.com/package/feature-toggles-react-sdk">React SDK on NPM</ProjectLink>
                </ProjectLinks>
            </ProjectDetails>
            <CodeExample/>
        </IndividualProject>
    )
}

export default OSFTReactSDK