import React,{useEffect} from "react";
import './footer.css';
import { FiSend } from "react-icons/fi";
import {MdTravelExplore} from 'react-icons/md';
import {AiOutlineTwitter} from 'react-icons/ai';
import {AiFillYoutube} from 'react-icons/ai';
import {AiFillInstagram} from 'react-icons/ai';
import {FaTripadvisor} from 'react-icons/fa';
import { FiChevronRight } from "react-icons/fi";

import Aos from "aos";    // this is an npm package ie    npm i aos --save   --> this package AOS allows you to animate elements as you scroll down, and up. If you scroll back to top, elements will animate to it's previous state etc..
import 'aos/dist/aos.css';

const Footer = () => {

    // this is a React Hook to add scrolling effect on the page
    useEffect(() => {
        Aos.init({duration:2000})
    },[]) 


    return (
        <>
            <section className="footer">
                <div className="videoDiv">
                    <video src={require("../../assets/video2.mp4")} loop autoPlay muted type="video/mp4"></video>
                </div>

                <div className="secContent container">
                    <div className="contactDiv flex">
                        <div className="text" data-aos="fade-up">
                            <small>KEEP IN TOUCH</small>
                            <h2>Travel with us</h2>
                        </div>

                        <div className="inputDiv flex">
                            <input type="text" placeholder="Enter Email Address" data-aos="fade-up"/>
                            <button className="btn flex" type="submit" data-aos="fade-up">
                                SEND <FiSend className="icon" />
                            </button>
                        </div>
                    </div>

                    <div className="footerCard flex">
                        <div className="footerIntro flex">
                            <div className="logoDiv">
                                <a href="#" className="logo flex">
                                <MdTravelExplore className="icon"/> Travel. 
                                </a>
                            </div>

                            <div className="footerParagraph" data-aos="fade-up">
                            A travel agency is a private retailer or public service that provides travel and tourism-related services to the general public on behalf of accommodation or travel suppliers to offer different kinds of travelling packages for each destination.
                            </div>

                            <div className="footerSocials flex" data-aos="fade-up">
                                <AiOutlineTwitter className="icon" />
                                <AiFillYoutube className="icon" />
                                <AiFillInstagram className="icon" />
                                <FaTripadvisor className="icon" />
                            </div>

                        </div>

                        <div className="footerLinks grid">

                        {/* Group ONE */}
                            <div className="linkGroup" data-aos="fade-up" data-aos-duration="3000">
                                <span className="groupTitle">OUR AGENCY</span>

                                <li className="footerLinks flex">
                                    <FiChevronRight className="icon" />
                                    Services
                                </li>
                                <li className="footerLinks flex">
                                    <FiChevronRight className="icon" />
                                    Insurance
                                </li>
                                <li className="footerLinks flex">
                                    <FiChevronRight className="icon" />
                                    Agency
                                </li>
                                <li className="footerLinks flex">
                                    <FiChevronRight className="icon" />
                                    Toursim
                                </li>
                                <li className="footerLinks flex">
                                    <FiChevronRight className="icon" />
                                    Payment
                                </li>
                            </div>

                        {/* Group TWO */}
                            <div className="linkGroup" data-aos="fade-up" data-aos-duration="4000">
                                <span className="groupTitle">PARTNERS</span>

                                <li className="footerLinks flex">
                                    <FiChevronRight className="icon" />
                                    Bookings
                                </li>
                                <li className="footerLinks flex">
                                    <FiChevronRight className="icon" />
                                    Rentcars
                                </li>
                                <li className="footerLinks flex">
                                    <FiChevronRight className="icon" />
                                    HostelWorld
                                </li>
                                <li className="footerLinks flex">
                                    <FiChevronRight className="icon" />
                                    Trivago
                                </li>
                                <li className="footerLinks flex">
                                    <FiChevronRight className="icon" />
                                    TripAdvisor
                                </li>
                            </div>

                        {/* Group THREE */}
                            <div className="linkGroup" data-aos="fade-up" data-aos-duration="5000">
                                <span className="groupTitle">LAST MINUTE</span>

                                <li className="footerLinks flex">
                                    <FiChevronRight className="icon" />
                                    India
                                </li>
                                <li className="footerLinks flex">
                                    <FiChevronRight className="icon" />
                                    London
                                </li>
                                <li className="footerLinks flex">
                                    <FiChevronRight className="icon" />
                                    California
                                </li>
                                <li className="footerLinks flex">
                                    <FiChevronRight className="icon" />
                                    Indonesia
                                </li>
                                <li className="footerLinks flex">
                                    <FiChevronRight className="icon" />
                                    Europe
                                </li>
                            </div>
                        </div>

                        <div className="footerDiv flex">
                            <small>TRAVEL WEBSITE</small>
                            <small>Made by Krishnangshu Sinha</small>
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
}

export default Footer;