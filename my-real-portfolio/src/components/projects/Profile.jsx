import React from "react";
import "./profile.css";
import NyanCat from "../../assets/NyanCatProject.png";
import SlingAir from "../../assets/SlingAirProject.png"

const Projects = () => {
    return (
        <div id="projects">
            <h1 className="title">Projects</h1>
            <div className="exeprience-details-container"></div>
            <div className="detail-container color-container">
                <div className="article-container">
                    <a href="https://github.com/Nickcez/project-js-nyan-cat">
                        <img 
                        src={NyanCat} 
                        alt=" Projet 1"
                        className="project-img" 
                        />
                    </a>

                    <a href="https://github.com/Nickcez/project-slingair?tab=readme-ov-file">
                        <img 
                        src={SlingAir}
                        alt=" Projet 2"
                        className="project-img" 
                        />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Projects;