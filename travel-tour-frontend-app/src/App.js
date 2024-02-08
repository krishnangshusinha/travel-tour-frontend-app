import React from "react";
import './app.css';
import Navbar from "./component/navbar/navbar";
import Home from "./component/home/home";
import Main from "./component/main/main";
import Footer from "./component/footer/footer";

const App = () => {
    return (
        <>
            <Navbar/>
            <Home/>
            <Main/>
            <Footer/>
        </>
    );
}

export default App;