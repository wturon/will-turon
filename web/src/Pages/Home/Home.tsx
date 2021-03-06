import img from "../../Assets/images/bg.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagramSquare,
  faLinkedin,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";
import { StyledTitle } from "../../Components/StyledTitle";

const instagramUrl = "https://www.instagram.com/wturon/";
const linkedInUrl = "https://www.linkedin.com/in/william-turon-763a10154/";
const youTubeUrl = "https://www.youtube.com/channel/UCT3N8AZOsodMSsXnzojTpPA";

const primaryText = "Hi, I'm";
const emphasizedPrimaryText = "Will!";
const secondaryText = `I'm a software developer, photographer, and photoshopping enthusiast. I made this website.`;

export const Home = (): JSX.Element => {
  return (
    <>
      <BackgroundImage>
        <HomeContainer>
          <StyledTitle
            primaryText={primaryText}
            emphasizedPrimaryText={emphasizedPrimaryText}
            secondaryText={secondaryText}
          >
            <IconGroup>
              <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
                <StyledIcon color="white" size="3x" icon={faInstagramSquare} />
              </a>
              <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
                <StyledIcon color="white" size="3x" icon={faLinkedin} />
              </a>
              <a href={youTubeUrl} target="_blank" rel="noopener noreferrer">
                <StyledIcon color="white" size="3x" icon={faYoutubeSquare} />
              </a>
            </IconGroup>
          </StyledTitle>
        </HomeContainer>
      </BackgroundImage>
    </>
  );
};

const BackgroundImage = styled.div`
  background: linear-gradient(to right, rgb(0, 0, 0), rgba(0, 0, 0, 0)),
    url(${img}) no-repeat;
  background-size: cover;
  background-position: top;
  height: 100vh;
`;

const HomeContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  padding-left: 5%;
  box-sizing: border-box;
`;

const IconGroup = styled.div`
  display: flex;
`;

const StyledIcon = styled(FontAwesomeIcon)`
  padding-right: 15px;
  box-sizing: content-box;
`;
