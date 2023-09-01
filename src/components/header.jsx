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
                <NavItem onClick={scrollToAbout}>About</NavItem>
                <NavItem onClick={scrollToSkills}>Skills</NavItem>
                <NavItem onClick={scrollToProjects}>Projects</NavItem>
                <NavItem onClick={scrollToContact}>Contact</NavItem>
            </NavBar>
        </HeaderStyled>
    )
}

export default Header