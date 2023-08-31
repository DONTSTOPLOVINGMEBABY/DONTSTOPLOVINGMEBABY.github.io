import { 
    AboutPageStyled, 
    PhotoOfMe, 
    AboutInfo, 
} from "../../styles/about.styled"
import SectionSplitter from "../section-splitter"

function AboutSection () {
    return (
        <AboutPageStyled>
            <SectionSplitter name="About" />
            <AboutInfo>
                <PhotoOfMe src="https://hjacobs-rest-api-production.up.railway.app/henryjacobs/me" alt="me!"/>
            </AboutInfo>
        </AboutPageStyled>
    )
}

export default AboutSection