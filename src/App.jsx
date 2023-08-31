import { AppPageStyled } from './styles/app.styled'
import Header from './components/header/header'
import WelcomeAnimation from './components/welcome-animations/welcome-animation'
import AboutSection from './components/about-section/about'
import { LandingPage } from './styles/app.styled'

function App() {

  return (
    <AppPageStyled>
      <LandingPage>
        <Header/>
        <WelcomeAnimation />
      </LandingPage>
      <AboutSection />
    </AppPageStyled>
  )
}

export default App
