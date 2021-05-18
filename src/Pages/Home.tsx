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
        <div className="title-group">
          <i className="fab fa-instagram-square"></i>
          <h1>Hi, I'm Will.</h1>
          <p>
            I'm a Software developer, photographer, and photoshopping
            enthusiast. I made this website
          </p>
          <div className="wrapper-col">
            <a href="https://www.instagram.com/wturon/">
              <FontAwesomeIcon
                className="icon"
                size="2x"
                icon={faInstagramSquare}
              />
            </a>
            <a href="https://www.linkedin.com/in/william-turon-763a10154/">
              <FontAwesomeIcon className="icon" size="2x" icon={faLinkedin} />
            </a>
            <a href="https://www.youtube.com/channel/UCT3N8AZOsodMSsXnzojTpPA">
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
  );
};
