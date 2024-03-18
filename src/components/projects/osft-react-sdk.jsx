import {
  BuiltWithIcons,
  IndividualProject,
  ProjectDescription,
  ProjectDetails,
  ProjectLink,
  ProjectLinks,
  ProjectMainTitle,
  ProjectSubtitle,
  ThinColumn,
  BuiltWith,
} from '../../styles/projects.styled';
import { useFlag } from 'feature-toggles-react-sdk';
import CodeExample from './code-example';
import TechStackIcon from './tech-stack-icon';
import javascript_svg from '../../assets/javascript.svg';
import react_svg from '../../assets/react.svg';
import npm_svg from '../../assets/npm.svg';
import vite_svg from '../../assets/vite.svg';
import babel_svg from '../../assets/babel.svg';
import typescript_svg from '../../assets/typescript.svg';

function OSFTReactSDK() {
  const useTypeScriptIcon = useFlag('projects.osft-reactSDK-typescript');

  return (
    <IndividualProject>
      <ThinColumn>
        <ProjectDetails>
          <ProjectSubtitle>JS Client & React SDK</ProjectSubtitle>
          <ProjectDescription>
            OSFT offers both a Javascript client and a React SDK that developers
            can use to implement feature toggles in their applications, both
            hosted on NPM.
          </ProjectDescription>
          <BuiltWith>Built With</BuiltWith>
          <BuiltWithIcons>
            {useTypeScriptIcon ? (
              <TechStackIcon icon={typescript_svg} name="TypeScript" />
            ) : (
              <TechStackIcon icon={javascript_svg} name="JavaScript" />
            )}
            <TechStackIcon icon={react_svg} name="React" />
            <TechStackIcon icon={vite_svg} name="Vite" />
            <TechStackIcon icon={babel_svg} name="Babel" />
            <TechStackIcon icon={npm_svg} name="NPM" />
          </BuiltWithIcons>
          <ProjectLinks>
            <ProjectLink
              target="_blank"
              href="https://www.npmjs.com/package/osff-js-sdk"
            >
              JS Client on NPM
            </ProjectLink>
            <ProjectLink
              target="_blank"
              href="https://www.npmjs.com/package/feature-toggles-react-sdk"
            >
              React SDK on NPM
            </ProjectLink>
          </ProjectLinks>
        </ProjectDetails>
      </ThinColumn>
      <CodeExample />
    </IndividualProject>
  );
}

export default OSFTReactSDK;
