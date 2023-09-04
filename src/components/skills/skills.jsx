import { 
    SkillsSectionStyled, 
    Skills
} from "../../styles/skills.styled"
import SectionSplitter from "../section-splitter"
import ProgrammingLanguages from "./programming-languages"

function SkillsSection () {
    return (
        <SkillsSectionStyled>
            <SectionSplitter $margintop="40px" name="Skills" side="right"/>
            <Skills>
                <ProgrammingLanguages />
            </Skills>
        </SkillsSectionStyled>
    )
}

export default SkillsSection