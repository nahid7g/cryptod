import React from 'react';
import { Link } from "react-router-dom";
import "./Footer.css";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"

const Footer = () => {
    return (
        <footer>
            <div className="container row g-2">
                <div className="col d-flex align-items-center">
                    <h2>Cryp<span className='tod'>Tod</span></h2>
                </div>
                <div className="col d-flex flex-column">
                    <h5>Support</h5>
                    <hr
                        style={{
                            backgroundColor: "#27ae60",
                            height: 3,
                            width: "50px"
                        }}
                    />
                    <span className="bar"></span>
                    <Link to="/">Contact Us</Link>
                    <Link to="/">Chat</Link>
                    <Link to="/">Help Center</Link>
                    <Link to="/">FAQ</Link>
                </div>
                <div className="col d-flex flex-column">
                    <h5>Developers</h5>
                    <hr
                        style={{
                            backgroundColor: "#27ae60",
                            height: 3,
                            width: "50px"
                        }}
                    />
                    <span className="bar d-flex flex-column"></span>
                    <Link to="/">Cloud</Link>
                    <Link to="/">Commerce</Link>
                    <Link to="/">Pro</Link>
                    <Link to="/">API</Link>
                </div>
                <div className="col d-flex flex-column">
                    <h5>Company</h5>
                    <hr
                        style={{
                            backgroundColor: "#27ae60",
                            height: 3,
                            width: "50px"
                        }}
                    />
                    <span className="bar"></span>
                    <Link to="/">About</Link>
                    <Link to="/">Information</Link>
                    <Link to="/">Legal</Link>
                    <Link to="/">Privacy</Link>
                </div>
                <div className="col d-flex flex-column">
                    <h5>Social</h5>
                    <hr
                        style={{
                            backgroundColor: "#27ae60",
                            height: 3,
                            width: "50px"
                        }}
                    />
                    <span className="bar"></span>
                    <Link to="/"><FaFacebook /></Link>
                    <Link to="/"><FaTwitter /></Link>
                    <Link to="/"><FaLinkedin /></Link>
                    <Link to="/"><FaGithub /></Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;