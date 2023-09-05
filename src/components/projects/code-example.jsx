import { 
  CodeExampleStyled, 
  CodeExamplePicture, 
} from "../../styles/projects.styled";
import react_sdk_svg from '../../assets/react-sdk-snippet.svg'

function CodeExample () {
    return (
        <CodeExampleStyled>
          <CodeExamplePicture src={react_sdk_svg} alt="React SDK Example"/>
        </CodeExampleStyled>
    )
}

export default CodeExample