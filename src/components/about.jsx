import {
  AboutPageStyled,
  PhotoOfMe,
  WrapPhoto,
  AboutInfo,
  Bio,
  ScrollerContainer,
  DescribeMyself,
} from '../styles/about.styled';
import SectionSplitter from './section-splitter';
import ScrollingText from './scroll-text';
import { useFlag } from 'feature-toggles-react-sdk';

function AboutSection() {
  const about_me_ticker = useFlag('About-Section.my-interests-ticker');

  return (
    <AboutPageStyled id="about">
      <SectionSplitter name="About" side="right" />
      <AboutInfo>
        <WrapPhoto>
          <PhotoOfMe
            src="https://hjacobs-rest-api-production.up.railway.app/henryjacobs/me"
            alt="me!"
          />
        </WrapPhoto>
        <DescribeMyself>
          <Bio>
            {/* My name is Henry Jacobs and I am a Full Stack Developer who is
            passionate about computers and the positive impacts they can bring
            to people's lives. I first started programming at University in 2019
            and have been exploring the ins and outs of web development since
            2022 with my work on The Odin Project. I'm totally enthralled by
            computers and learning as much as I possibly can about them from the
            physical representation of bits to arranging pixels on the screen
            with HTML and CSS. 
            
            ** Edited as of 9/25/2025

            Also, if you are in dev tools reading this... hi :)
            */}
            My name's Henry, and I am a Fullstack Software Engineer.
            <br></br>
            <br></br>
            I'm currently working as a Full Stack Engineer at RetailReady - a Y-Combinator backed startup that's building a unified approach to retail
            compliance through AI and modern software engineering best practices.
            <br></br>
            <br></br>
            I'm also obsessed with learning... I get antsy just thinking about all of those unread books down at the library.
          </Bio>
          {about_me_ticker ? (
            <ScrollerContainer>
              <h3 style={{
                marginTop: '20px'
              }}>Interests</h3>
              <ScrollingText
                text="Computer Science &middot;"
                direction="toLeft"
              />
              <ScrollingText
                text="Finance & Global Economics &middot;"
                direction="toRight"
              />
              <ScrollingText text="Mathematics &middot;" direction="toLeft" />
              <ScrollingText text="Reading &middot;" direction="toRight" />
            </ScrollerContainer>
          ) : null}
        </DescribeMyself>
      </AboutInfo>
    </AboutPageStyled>
  );
}

export default AboutSection;
