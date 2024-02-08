import React,{useEffect} from "react";
import './home.css';
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaTripadvisor } from "react-icons/fa";
import { BsListTask } from "react-icons/bs";
import { TbApps } from "react-icons/tb";

import Aos from "aos";    // this is an npm package ie    npm i aos --save   --> this package AOS allows you to animate elements as you scroll down, and up. If you scroll back to top, elements will animate to it's previous state etc..
import 'aos/dist/aos.css';


const Home = () => {

    // this is a React Hook to add scrolling effect on the page
    useEffect(() => {
        Aos.init({duration:2000})
    },[]) 

    return (
        <>
            <section className="home">
                <div className="overlay">
                    
                </div>
                <video src={require("../../assets/video1.mp4")} type="video/mp4" muted autoPlay loop ></video>{/* require() is used to bring in external files for our website such as images, videos etc */}


                <div className="homeContent container">
                    <div className="textDiv">

                        <span className="smalltext" data-aos="fade-up">
                            Our Packages
                        </span>

                        <h1 className="homeTitle" data-aos="fade-up">
                            Search Your Holiday
                        </h1>

                    </div>

                    <div className="cardDiv grid" data-aos="fade-up">
                        <div className="destinationInput">
                            <label htmlFor="city"> Search Your Destination: </label>
                            <div className="input flex">
                                <input type="text" placeholder="Enter Name Here..."/>
                                <GrLocation className="icon" />
                            </div>
                        </div>

                        <div className="dateInput">
                            <label htmlFor="date"> Select Your date: </label>
                            <div className="input flex">
                                <input type="date"/>
                            </div>
                        </div>

                        <div className="priceInput">
                            <div className="label_total flex">
                                <label htmlFor="price">Max Price:</label>
                                <h3 className="total">$5000</h3>
                            </div>
                            <div className="input flex">
                                <input type="range" max="5000" min="1000"/>
                            </div>
                        </div>

                        <div className="searchOptions flex">
                            <HiFilter className="icon" />
                            <span>MORE FILTERS</span>
                        </div>

                    </div>

                    <div className="homeFooterIcons flex" data-aos="fade-up">
                        <div className="rightIcons">
                            <FiFacebook className="icon" />
                            <FaInstagram className="icon" />
                            <FaTripadvisor className="icon" />
                        </div>
                        <div className="leftIcons">
                            <BsListTask className="icon" />
                            <TbApps className="icon" />
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}

export default Home;