import { 
    SkillsSectionStyled, 
    Skills
} from "../../styles/skills.styled"
import SectionSplitter from "../section-splitter"
import ProgrammingLanguages from "./programming-languages"
import FrameworksSection from './technologies'
import FullSectionSplitter from "../full-section-splitter"
import MiscSkillsSection from "./misc-skills"

function SkillsSection () {
    return (
        <SkillsSectionStyled id="skills">
            <FullSectionSplitter $margintop="40px" name="Skills" />
            <Skills>
                <ProgrammingLanguages />
                <FrameworksSection />   
                <MiscSkillsSection />
            </Skills>
        </SkillsSectionStyled>
    )
}

export default SkillsSection