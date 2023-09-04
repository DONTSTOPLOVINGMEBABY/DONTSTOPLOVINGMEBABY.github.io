import { AppPageStyled } from './styles/app.styled'
import Header from './components/header'
import WelcomeAnimation from './components/welcome-animations/welcome-animation'
import AboutSection from './components/about'
import { LandingPage } from './styles/app.styled'
import ProjectSection from './components/projects/project'
import SkillsSection from './components/skills/skills'

function App() {

  return (
    <AppPageStyled>
      <LandingPage>
        <Header/>
        <WelcomeAnimation />
      </LandingPage>
      <AboutSection />
      <ProjectSection/>
      <SkillsSection />
    </AppPageStyled>
  )
}

export default App
