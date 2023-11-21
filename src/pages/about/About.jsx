import React from "react";
import "./about.scss";

const About = () => {
    return (
        <div className="app__about-container">
            
            <div className="about-subcontainer">
                <div className="top-container">
                    <div className="title">
                        <h1>  About Us</h1>
                        <p>Service Recommendation is a proactive service-discovery technique, which proactively recommends services to users according to users preferences</p>
                    </div>
                    
                </div>
                <div className="bottom-container">
                    <div className="p1">
                        <div className="image1"></div>
                        <div className="par1">
                            <p>Tirumalesha</p>
                            <p>4SU20CS116</p>
                        </div>
                    </div>
                    <div className="p2">
                    <div className="image2"></div>
                    <div className="par2">
                        <p>Swamy B C</p>
                        <p>4SU20CS114</p>
                    </div>
                    </div>
                    <div className="p3">
                    <div className="image3"></div>
                    <div className="par3">
                        <p>Shresta G R</p>
                        <p>4SU20CS097</p>
                    </div>
                    </div>
                    <div className="p4">
                    <div className="image4"></div>
                    <div className="par4">
                        <p>Rashmi M</p>
                        <p>4SU20CS075</p>
                    </div>   
                    </div>
                </div>
            </div>

        </div>

    );
};

export default About;