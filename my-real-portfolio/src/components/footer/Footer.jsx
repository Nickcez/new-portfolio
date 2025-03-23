import React from "react";
import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Césaire</h1>
                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link"></a>
                    </li>

                    <li>
                        <a href="#Portfolio" className="footer__link"></a>
                    </li>
                </ul>

                <div className="footer__social">
                    {/* <a href="https://www.instagram.com/nickcez/" className="home__social-icon" target="_blank">
                    <i class="uil uil-instagram"></i>
                    </a> */}
                    <a href="https://github.com/Nickcez" className="home__social-icon" target="_blank">
                    <i class="uil uil-github-alt"></i>
                    </a>
                    <a href="" className="home__social-icon" target="_blank">
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;