import {
    HeaderStyled,
    Name,
    NavBar,
    NavItem,
    NavLink,
} from "../styles/header.styled"
import useWindowSize from '../hooks/useWindowSize'
import { useFlag } from 'feature-toggles-react-sdk'

function Header() {

    const screenSize = useWindowSize()

    const showResumeLink = useFlag('Page-Header.resume-link')

    return (
        screenSize.width > 700 ? <HeaderStyled>
            <Name>Henry Jacobs</Name>
            <NavBar>
                <NavItem href="#about">ABOUT</NavItem>
                <NavItem href="#projects">PROJECTS</NavItem>
                <NavItem href="#contact">CONTACT</NavItem>
                {showResumeLink ? <NavItem href="https://hjacobs-rest-api-production.up.railway.app/henryjacobs/resume" target="_blank">RESUME</NavItem> : null}
            </NavBar>
        </HeaderStyled>
            : <HeaderStyled>
                <Name>Henry Jacobs</Name>
                <NavBar>
                    {showResumeLink ? <NavItem href="https://hjacobs-rest-api-production.up.railway.app/henryjacobs/resume" target="_blank">RESUME</NavItem> : null}
                </NavBar>
            </HeaderStyled>
    )
}

export default Header