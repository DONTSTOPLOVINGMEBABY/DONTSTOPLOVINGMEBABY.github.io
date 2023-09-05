import { 
    CategorySkills,
    CategoryTitle, 
    SkillCategory, 
    SkillRow, 
} from "../../styles/skills.styled";
import docker_svg from '../../assets/docker.svg'
import firebase_svg from '../../assets/firebase.svg'
import git_svg from '../../assets/git.svg'
import webpack_svg from '../../assets/webpack.svg'
import jest_svg from '../../assets/jest.svg'
import styled_components_svg from '../../assets/styled-components.svg'
import railway_svg from '../../assets/railway.svg'
import SingleSkill from "./singleSkill";


function MiscSkillsSection () {
    return (
        <SkillCategory>
            <CategoryTitle>Miscellanous</CategoryTitle>
            <CategorySkills>
                <SkillRow>
                    <SingleSkill
                    icon={jest_svg}
                    name="Jest"
                    />
                    <SingleSkill
                    icon={firebase_svg}
                    name="Firebase"
                    />                 
                </SkillRow>
                <SkillRow>
                    <SingleSkill
                    icon={git_svg}
                    name="Git"
                    />
                    <SingleSkill
                    icon={docker_svg}
                    name="Docker"
                    />
                    <SingleSkill
                    icon={webpack_svg}
                    name="Webpack"
                    />
                </SkillRow>
                <SkillRow>
                    <SingleSkill
                    icon={railway_svg}
                    name="Railway"
                    />
                    <SingleSkill
                    icon={styled_components_svg}
                    name="Styled Components"
                    />
                </SkillRow>
            </CategorySkills>
        </SkillCategory>
    )
}

export default MiscSkillsSection