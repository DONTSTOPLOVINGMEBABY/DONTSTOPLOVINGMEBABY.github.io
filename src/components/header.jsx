import { 
    HeaderStyled, 
    Name, 
    NavBar, 
    NavItem, 
} from "../styles/header.styled"

function Header () {

    const scrollToAbout = () => {}
    const scrollToSkills = () => {}
    const scrollToProjects = () => {}
    const scrollToContact = () => {}

    return (
        <HeaderStyled>
            <Name>Henry Jacobs</Name>
            <NavBar>
                <NavItem onClick={scrollToAbout}>ABOUT</NavItem>
                <NavItem onClick={scrollToSkills}>SKILLS</NavItem>
                <NavItem onClick={scrollToProjects}>PROJECTS</NavItem>
                <NavItem onClick={scrollToContact}>CONTACT</NavItem>
            </NavBar>
        </HeaderStyled>
    )
}

export default Header