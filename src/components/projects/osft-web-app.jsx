import {
  IndividualProject,
  ProjectDetails,
  ProjectTitles,
  ProjectMainTitle,
  ProjectSubtitle,
  ProjectDescription,
  BuiltWithIcons,
  ProjectLink,
  ProjectLinks,
  ThinColumn,
  BuiltWith,
} from '../../styles/projects.styled';
import TechStackIcon from './tech-stack-icon';
import ProjectVideoDemo from './osft-video';
import express_svg from '../../assets/express.svg';
import javascript_svg from '../../assets/javascript.svg';
import mongodb_svg from '../../assets/mongodb.svg';
import nodejs_svg from '../../assets/nodejs.svg';
import react_svg from '../../assets/react.svg';
import redis_svg from '../../assets/redis.svg';

function OSFTWebApp() {
  return (
    <IndividualProject id="osft">
      <ThinColumn>
        <ProjectDetails>
          <ProjectTitles>
            <ProjectMainTitle>
              Open Source Feature Toggles (OSFT)
            </ProjectMainTitle>
            <ProjectSubtitle>Full Stack Web App</ProjectSubtitle>
          </ProjectTitles>
          <ProjectDescription>
            OSFT is an open source feature flagging service that allows
            developers to embed highly performant and scalable feature toggles
            directly into their Javascript and React Applications.
          </ProjectDescription>
          <BuiltWith>Built With</BuiltWith>
          <BuiltWithIcons>
            <TechStackIcon icon={mongodb_svg} name="MongoDB" />
            <TechStackIcon icon={redis_svg} name="Redis" />
            <TechStackIcon icon={nodejs_svg} name="NodeJS" />
            <TechStackIcon icon={express_svg} name="ExpressJS" />
            <TechStackIcon icon={react_svg} name="React" />
            <TechStackIcon icon={javascript_svg} name="JavaScript" />
          </BuiltWithIcons>
          <ProjectLinks>
            <ProjectLink
              target="_blank"
              href="https://energetic-celery-envproduction.up.railway.app/"
            >
              Use OSFT
            </ProjectLink>
            <ProjectLink
              target="_blank"
              href="https://github.com/Open-Source-Feature-Toggles/backend"
            >
              View Source Code
            </ProjectLink>
          </ProjectLinks>
        </ProjectDetails>
      </ThinColumn>
      <ProjectVideoDemo watch_url="https://hjacobs-rest-api-production.up.railway.app/osft/raw-video-example" />
    </IndividualProject>
  );
}

export default OSFTWebApp;
