import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/new-logo.svg";
import pic from "../assets/homepic.svg";

const Home = () =>(
    <div className="main-container">
        <header className="home-header">
        <img src={logo} alt="" className="home-logo"/>
        </header>
        <div className="message-container">
            <div className="message">
                <p className="text">Are you tired of not knowing where or what to eat?</p>
                <p className="text">Find recipes and restaurants for whatever you're craving today using MealScouter 
                </p>
            </div>
           
           <img src={pic} alt="" className="home-pic"/>
        </div>
        <div className="link-container">
            <Link to="/dashboard">
            <button className="dash-button">Go to dashboard</button>
            </Link>
        </div>
    </div>
);

export default Home;