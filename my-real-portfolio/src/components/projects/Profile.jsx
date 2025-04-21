import React from "react";
import "./profile.css";
import NyanCat from "../../assets/NyanCatProject.png";
import SlingAir from "../../assets/SlingAirProject.png";
import MeteoP from "../../assets/meteo-pic.png";

const Projects = () => {
    return (
        <div id="projects">
            <h1 className="title">Projects</h1>
            <div className="exeprience-details-container"></div>
            <div className="detail-container color-container">
                <div className="article-container">
                    <a href="https://github.com/Nickcez/Nyan-Cat/tree/main/project-js-nyan-cat">
                        <img
                        src={NyanCat}
                        alt=" Projet 1"
                        className="project-img"
                        />
                    </a>
                    {/* <p className="project_description">
                        This project was an introduction to Object-Oriented Programming using JavaScript, built around a quirky browser-based game. The goal was to fix and expand a nearly-working codebase into a fully functional and fun game.

                        The project was divided into two phases:
                        1. Fixing Core Game Logic:
                        Implemented collision detection to allow the game to end when the player (an anthropomorphic cheeseburger) is hit by a falling Nyan Cat.
                        Modified the isPlayerDead() method to check for hitbox overlap between enemies and the player using bounding box logic.
                    </p> */}
                {/* </div>
                <div className="article_container"> */}
                    <a href="https://github.com/Nickcez/SlingAir">
                        <img
                        src={SlingAir}
                        alt=" Projet 2"
                        className="project-img"
                        />
                    </a>
                    <a href="https://github.com/Nickcez/Meteo-Java">
                        <img
                        src={MeteoP}
                        alt="Projet 3"
                        className="project-img"
                         />
                    </a>
                    {/* <p className="project_description">
                        This project simulated a real-world onboarding scenario: I joined an airline startup mid-project as a full-stack developer and had to complete and connect an existing codebase with minimal documentation. 
                        The challenge required both backend and frontend problem-solving, culminating in a fully functional seat-booking web app for "Slingshot Airlines."
                    </p> */}
                </div>
            </div>
        </div>
    );
}

export default Projects;