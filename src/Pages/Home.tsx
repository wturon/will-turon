import React from "react";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagramSquare,
  faLinkedin,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";

export const Home = (): JSX.Element => {
  return (
    <div>
      <div className="container">
        <div className="flex-col full-height">
          <div className="flex-row">
            <div className="vertical-line" />
            <div className="title-group">
              <h1>
                Hi, I'm <span className="gradient-text">Will.</span>
              </h1>
              <p>
                I'm a Software developer, photographer, and photoshopping
                enthusiast. I made this website.
              </p>
              <div className="wrapper-col">
                <a
                  href="https://www.instagram.com/wturon/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    className="icon"
                    size="2x"
                    icon={faInstagramSquare}
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/william-turon-763a10154/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    className="icon"
                    size="2x"
                    icon={faLinkedin}
                  />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCT3N8AZOsodMSsXnzojTpPA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    className="icon"
                    size="2x"
                    icon={faYoutubeSquare}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
