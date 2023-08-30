import { AppPageStyled } from './styles/app.styled'
import Header from './components/header/header'
import WelcomeAnimation from './components/welcome-animation/welcome-animation'

function App() {

  return (
    <AppPageStyled>
      <Header/>
      <WelcomeAnimation />
    </AppPageStyled>
  )
}

export default App
