import { AppPageStyled } from './styles/app.styled'
import Header from './components/header'
import WelcomeAnimation from './components/welcome-animations/welcome-animation'
import AboutSection from './components/about'
import { LandingPage } from './styles/app.styled'
import ProjectSection from './components/projects/project'

function App() {

  return (
    <AppPageStyled>
      <LandingPage>
        <Header/>
        <WelcomeAnimation />
      </LandingPage>
      <AboutSection />
      <ProjectSection/>
    </AppPageStyled>
  )
}

export default App
