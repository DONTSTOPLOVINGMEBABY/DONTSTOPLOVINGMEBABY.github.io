import { AppPageStyled } from './styles/app.styled'
import Header from './components/header'
import WelcomeAnimation from './components/welcome-animations/welcome-animation'
import AboutSection from './components/about'
import { LandingPage } from './styles/app.styled'
import ProjectSection from './components/projects/project'
import SkillsSection from './components/skills/skills'
import ContactSection from './components/contact/contact'
import Footer from './components/footer/footer'
import { FlagProvider } from 'feature-toggles-react-sdk'

const osft_config =  {
  apiKey : import.meta.env.VITE_OSFT_PROD_KEY, 
  refreshRate : '5s', 
}

function App() {
  return (
    <FlagProvider config={osft_config}>
      <AppPageStyled>
        <LandingPage>
          <Header/>
          <WelcomeAnimation />
        </LandingPage>
        <AboutSection />
        <ProjectSection/>
        <SkillsSection />
        <ContactSection />
        <Footer />
      </AppPageStyled>
    </FlagProvider> 
  )
}

export default App
