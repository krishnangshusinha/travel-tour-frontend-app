import React,{useEffect} from "react";
import './main.css';
import { data } from "./data";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";

import Aos from "aos";
import "aos/dist/aos.css";

const Main = () => {

    // this is a React Hook to add scrolling effect on the page
    useEffect(() => {
        Aos.init({duration:2000})
    },[]) 

    return (
        <>
            <section className="main container section">

                <div className="secTitle">
                    <h3 className="title" data-aos="fade-right">Most Visited Destination</h3>
                </div>

                <div className="seeContent grid">
                    {/* For creation of the cards we just use the map() function */}

                    {
                        data.map( ({id,imgSrc,destTitle,location,grade,fees,desciption}) => {

                            return (
                                <div className="singleDestination" key={id} data-aos="fade-up">
                                    <div className="imageDiv">
                                        <img src={imgSrc} alt={destTitle}/>
                                    </div>
                                    <div className="cardInfo">
                                        <h4 className="destTitle"> {destTitle} </h4>
                                        <span className="continent flex">
                                            <HiOutlineLocationMarker className="icon" />
                                            <span className="name"> {location} </span>
                                        </span>

                                        <div className="fees flex">
                                            <div className="grade">
                                                <span> {grade} <small>+1</small> </span> 
                                            </div>
                                            <div className="price">
                                                <h5> {fees} </h5>
                                            </div>
                                        </div>

                                        <div className="desc">
                                            <p>{desciption}</p>
                                        </div>

                                        <button className="btn flex">
                                            DETAILS
                                            <HiOutlineClipboardCheck className="icon" />
                                        </button>

                                    </div>
                                </div>
                            );

                        })
                    }
                </div>

            </section>
        </>
    );
}

export default Main;