import { CodeExampleStyled } from "../../styles/projects.styled";
import rehypeRaw from "rehype-raw";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import '../../styles/github-dark.css'


const markdownSource = `
\`\`\`js
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { FlagProvider } from 'feature-toggles-react-sdk'

const config = {
  apiKey : 'YOUR-API-KEY', 
  refreshRate : '5s', 
}

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <FlagProvider config={config}>
      <App />
    </FlagProvider>
  </React.StrictMode>,
)
\`\`\`
`;

function CodeExample () {
    return (
        <CodeExampleStyled>
            <Markdown rehypePlugins={[rehypeRaw, rehypeHighlight]}>
            {markdownSource}
            </Markdown>
        </CodeExampleStyled>
    )
}

export default CodeExample