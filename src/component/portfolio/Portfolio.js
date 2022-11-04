import React, { useRef } from "react";
import "./portfolio.css";
import weather from "../../image/weatherapp.png";
import post from "../../image/imgPost.png";
import tictac from "../../image/tic-tac.png";
import insta from "../../image/insta.png";

export default function Portfolio() {
  const ref = useRef();
  const link = useRef();
  const postImagegithubLink = useRef();
  const postImagewebsite = useRef();
  const tictactoe = useRef();
  const tictactoeLink = useRef();
  const instagit = useRef();
  const instamern = useRef();
  const weathergithubLink = () => {
    ref.current.click();
  };
  const handlewebsite = () => {
    link.current.click();
  };
  const imagePostGithub = () => {
    postImagegithubLink.current.click();
  };
  const handlewebsiteImage = () => {
    postImagewebsite.current.click();
  };
  const tictacgithubLink = () => {
    tictactoe.current.click();
  };
  const handlewebsitetictac = () => {
    tictactoeLink.current.click();
  };
  const instagitLink = () => {
    instagit.current.click();
  }
  const instawebsitelink = () => {
    instamern.current.click();
  }
  return (
    <div className="project" id="portfolio-setion">
      <h1 className="recently">RECENTLY PROJECT</h1>
      <div id="all-project">
        <div className="weather">
          <div className="weatherInfo">
            <p className="infoHeading">Weather App</p>
            <p className="mainInfo">
              This is a Weather application. This is Developed by using a
              weather API ,React and CSS.Some of the features of this react app
              is search your city name is in search box and click search button
              and it show all weather data related to that city which you search
            </p>
            <div className="skillButton">
              <span className="reactSkill">React JS</span>
              <span className="reactSkill">&nbsp; Css &nbsp;</span>
            </div>
            <span>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 16 16"
                onClick={weathergithubLink}
                className="projects__icon"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
              </svg>
              <a
                href="https://github.com/himanshu1234740/weather-app"
                ref={ref}
                style={{ display: "none" }}
                target="_blank"
                rel="noreferrer"
              >
                weather
              </a>
            </span>
            <span>
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                onClick={handlewebsite}
                class="projects__icon"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z"></path>
                <path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z"></path>
              </svg>
              <a
                href="https://weather-app-zeta-navy.vercel.app"
                ref={link}
                target="_blank"
                style={{ display: "none" }}
                rel="noreferrer"
              >
                app
              </a>
            </span>
          </div>

          <div className="weatherimg">
            <img className="weatherapp-img" src={weather} alt="" />
          </div>
        </div>
        <div className="imagePost">
          <div className="image-post">
            <div className="postImg">
              <img className="weatherapp-img" src={post} alt="" />
            </div>
            <div className="postInfo">
              <p className="infoHeading">Image Post Application</p>
              <p className="mainInfo">
                This is a image post application. This is Developed by using
                MongoDB,NodeJS,ExpressJS and Ejs , Javascript. Some of the
                features of this app is routing and Create data read data update
                data and delete the data. In this application I am using JWT
                package for authenticate the user{" "}
              </p>
              <div className="skillButton">
                <span className="reactSkill">NodeJS</span>
                <span className="reactSkill">MongoDB</span>
                <span className="reactSkill">&nbsp; Css &nbsp;</span>
              </div>
              <div className="skillButton">
                <span className="reactSkill">ExpressJS</span>
                <span className="reactSkill">Jsonwebtoken</span>
                
              </div>
              <span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  onClick={imagePostGithub}
                  className="projects__icon"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                </svg>
                <a
                  href="https://github.com/himanshu1234740/Image-post"
                  ref={postImagegithubLink}
                  style={{ display: "none" }}
                  target="_blank"
                >
                  image
                </a>
              </span>
              <span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  onClick={handlewebsiteImage}
                  class="projects__icon"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z"></path>
                  <path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z"></path>
                </svg>
                <a
                  href="https://post-image.herokuapp.com"
                  ref={postImagewebsite}
                  target="_blank"
                  style={{ display: "none" }}
                >
                  app
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="weather tic-tac-toe" style={{ marginTop: "10rem" }}>
          <div className="weatherInfo">
            <p className="infoHeading">Tic-Tac-Toe</p>
            <p className="mainInfo">
              This is a simple tic tac toe game which we must have palyed
              sometime in our childhood on paper. This is built by using simple
              javascript and simple css. This app has results like win/loose and
              Tie
            </p>
            <div className="skillButton">
              <span className="reactSkill">Javascript</span>
              <span className="reactSkill">&nbsp; Css &nbsp;</span>
            </div>
            <span>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 16 16"
                onClick={tictacgithubLink}
                className="projects__icon"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
              </svg>
              <a
                href="https://github.com/himanshu1234740/tic-tac-toe"
                ref={tictactoe}
                style={{ display: "none" }}
                target="_blank"
                rel="noreferrer"
              >
                tic-Tac
              </a>
            </span>
            <span>
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                onClick={handlewebsitetictac}
                class="projects__icon"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z"></path>
                <path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z"></path>
              </svg>
              <a
                href="https://tic-tac-toe-wheat-delta.vercel.app"
                ref={tictactoeLink}
                target="_blank"
                style={{ display: "none" }}
                rel="noreferrer"
              >
                app
              </a>
            </span>
          </div>
          <div className="weatherimg">
            <img
              className="weatherapp-img"
              src={tictac}
              style={{ objectFit: "cover" }}
              alt=""
            />
          </div>
        </div>
        <div className="imagePost">
          <div className="image-post">
            <div className="postImg">
              <img className="weatherapp-img" src={insta} alt="" />
            </div>
            <div className="postInfo">
              <p className="infoHeading">MERN social media</p>
              <p className="mainInfo">
                This is a social media type application. This is Developed by using
                MongoDB,NodeJS,ExpressJS and react  Some of the
                features of this app is routing and Create data read data update
                data and delete the data and in this application you can like coments the post. In this application I am using JWT
                package for authenticate the user
              </p>
              <div className="skillButton">
                <span className="reactSkill">NodeJS</span>
                <span className="reactSkill">MongoDB</span>
                <span className="reactSkill">&nbsp; Css &nbsp;</span>
              </div>
              <div className="skillButton">
                <span className="reactSkill">ExpressJS</span>
                <span className="reactSkill">Jsonwebtoken</span>
                
              </div>
              <span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  onClick={instagitLink}
                  className="projects__icon"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                </svg>
                <a
                  href="https://github.com/himanshu1234740/mern-frontend"
                  ref={instagit}
                  style={{ display: "none" }}
                  target="_blank"
                  rel="noreferrer"
                >
                  github
                </a>
              </span>
              <span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  onClick={instawebsitelink}
                  class="projects__icon"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z"></path>
                  <path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z"></path>
                </svg>
                <a
                  href="https://mern-frontend-gilt.vercel.app"
                  ref={instamern}
                  target="_blank"
                  style={{ display: "none" }}
                  rel="noreferrer"
                >
                  insta
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
