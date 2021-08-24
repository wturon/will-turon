import React from "react";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagramSquare,
  faLinkedin,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";
import { StyledTitle } from "../Components/StyledTitle/StyledTitle";

const instagramUrl = "https://www.instagram.com/wturon/";
const linkedInUrl = "https://www.linkedin.com/in/william-turon-763a10154/";
const youTubeUrl = "https://www.youtube.com/channel/UCT3N8AZOsodMSsXnzojTpPA";

const primaryText = "Hi, I'm";
const emphasizedPrimaryText = "Will!";
const secondaryText = `I'm a software developer, photographer, designer, and photoshopping enthusiast. 
This website is a project I started to learn more about the technologies I use as a cloud engineer.`;

export const Home = (): JSX.Element => {
  return (
    <div>
      <div className="background">
        <div className="max-height flex-col">
          <div className="content-group flex-row">
            <StyledTitle
              primaryText={primaryText}
              emphasizedPrimaryText={emphasizedPrimaryText}
              secondaryText={secondaryText}
            >
              <div className="flex-row">
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    className="icon"
                    size="2x"
                    icon={faInstagramSquare}
                  />
                </a>
                <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon
                    className="icon"
                    size="2x"
                    icon={faLinkedin}
                  />
                </a>
                <a href={youTubeUrl} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon
                    className="icon"
                    size="2x"
                    icon={faYoutubeSquare}
                  />
                </a>
              </div>
            </StyledTitle>
          </div>
        </div>
      </div>
    </div>
  );
};
