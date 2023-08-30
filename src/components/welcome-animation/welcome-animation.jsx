import { 
    WelcomeAnimationStyled,  
    MessageWrapper
} from "../../styles/welcomeAnimation"
import messages from "../../utils/messages"
import Animation from "./animation"

function WelcomeAnimation () {
    return (
        <WelcomeAnimationStyled>
            <MessageWrapper>
                <Animation message={"hi"}/>
            </MessageWrapper>
        </WelcomeAnimationStyled>
    )
}

export default WelcomeAnimation