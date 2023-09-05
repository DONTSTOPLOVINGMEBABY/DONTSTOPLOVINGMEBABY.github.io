import { 
    CategorySkills, 
    CategoryTitle, 
    SkillCategory, 
    SkillRow
} 
from "../../styles/skills.styled"
import SingleSkill from "./singleSkill"
import javascript_svg from '../../assets/javascript.svg'
import python_svg from '../../assets/python.svg'
import racket_svg from '../../assets/racket.svg'
import bash_svg from '../../assets/bash.svg'
import c_svg from '../../assets/c.svg'

function ProgrammingLanguages () {
    return (
        <SkillCategory>
            <CategoryTitle>Programming Languages</CategoryTitle>
            <CategorySkills>
                <SkillRow>
                    <SingleSkill
                    icon={bash_svg}
                    name="Bash"
                    />
                    <SingleSkill 
                    icon={python_svg}
                    name="Python"
                    />
                </SkillRow>
                <SkillRow>
                    <SingleSkill
                    icon={javascript_svg}
                    name="Javascript"
                    />
                </SkillRow>
                <SkillRow>
                    <SingleSkill
                    icon={racket_svg}
                    name="Racket"
                    />
                    <SingleSkill
                    icon={c_svg}
                    name="C"
                    />
                </SkillRow>
            </CategorySkills>
        </SkillCategory>    
    )
}

export default ProgrammingLanguages