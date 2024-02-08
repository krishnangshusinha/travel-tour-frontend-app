import React, { useState } from "react";
import './navbar.css';
import {MdTravelExplore} from 'react-icons/md';
import {IoIosCloseCircle} from 'react-icons/io';
import {TbGridDots} from 'react-icons/tb';


/* For screens with max width 768px we are making the navbar toggle. i.e the entire navbar would only be visible is you 
click a at top-right corner button, and if you click the cross button navbar closes . Inorder to add this functionality
within the media queries we first set our top = -500rem so initially navbar is not visible, now we create a class
called activeNavbar where we have top = 6rem, so now we use a state where active varibale is initially set as 
normal class name "navBar" but when the toggle button is clicked the value of "active" is set to "navBar activeNavbar"
i.e a new class is added so not top becomes 6 rem and hence it becomes visible now when cross button is clicked another
function is being called that makes class name as "navBar" hence again top = -500rem and hence becomes unvisible  */


const Navbar = () => {

    const [active , setactive] = useState('navBar');    // this holds the state of toggling the navbar. When the screen width decreases, we want the navbar to hide and only open when the doted icon is clicked and close when the cross icon is clicked 

    //function to toggle the navbar for smaller screens
    // opening navbar
    const showNav = () => {
        setactive('navBar activeNavbar');
    }

    //closing navbar
    const closeNav = () => {
        setactive("navBar");
    }

    return (
        <>
            <section className="navBarSection"> 
                <header className="header flex">
                    <div className="logoDiv">
                        <a href="#" className="logo flex">
                            <h1> <MdTravelExplore className="icon"/> Travel.</h1>    {/* This MdTravelExplore component is imported fom react-icons package which gives the icon before "Travel." */}
                        </a>
                    </div>


                    <div className={active}>
                        <ul className="navLists flex">

                            <li className="navItem">
                                <a href="#" className="navLink">Home</a>
                            </li>

                            <li className="navItem">
                                <a href="#" className="navLink">Packages</a>
                            </li>

                            <li className="navItem">
                                <a href="#" className="navLink">Shop</a>
                            </li>
                             
                            <li className="navItem">
                                <a href="#" className="navLink">About</a>
                            </li>

                            <li className="navItem">
                                <a href="#" className="navLink">Pages</a>
                            </li>
                             
                            <li className="navItem">
                                <a href="#" className="navLink">News</a>
                            </li>
                            
                            <li className="navItem">
                                <a href="#" className="navLink">Contact</a>
                            </li>

                            <button className="btn">
                                <a href="#">BOOK NOW</a>
                            </button>

                        </ul>

                        <div className="closeNavbar" onClick={closeNav} >
                            <IoIosCloseCircle className="icon" />   {/* This is the cross icon which when clicked closes the navbar from smaller screes(max width 768px) */}
                        </div>

                    </div>


                    <div className="toggleNavbar" onClick={showNav} >
                        <TbGridDots className="icon" />   {/* this is the doted button which when clicked opens the navbar for smaller screens(max with 768px) */}
                    </div>
                </header> 
            </section>
        </>
    );
}

export default Navbar;