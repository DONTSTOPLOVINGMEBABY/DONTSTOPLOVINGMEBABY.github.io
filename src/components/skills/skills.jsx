import { 
    SkillsSectionStyled, 
    Skills
} from "../../styles/skills.styled"
import SectionSplitter from "../section-splitter"
import ProgrammingLanguages from "./programming-languages"
import FrameworksSection from './frameworks'
import FullSectionSplitter from "../full-section-splitter"
import MiscSkillsSection from "./misc-skills"

function SkillsSection () {
    return (
        <SkillsSectionStyled>
            {/* <FullSectionSplitter $margintop="40px" name="Skills" /> */}
            <SectionSplitter $margintop="40px" name="Skills" side="right"/>
            <Skills>
                <ProgrammingLanguages />
                <FrameworksSection />   
                <MiscSkillsSection />
            </Skills>
        </SkillsSectionStyled>
    )
}

export default SkillsSection