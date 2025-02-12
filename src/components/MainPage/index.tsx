import ContentBox from "../ContentBox";
import './index.scss';
import broccoli from "../../assets/icons/broccoli.svg";
import spicehunt from "../../assets/icons/spicehunt.svg";
import React from "react";

function MainPage() {
    return (
        <div className="main-page">
            <div className="spicehunt">
                <img className="spicehunt-title" src={spicehunt} alt="" />
                <img className="spicehunt-logo" src={broccoli} alt="" />
            </div>
            <ContentBox />
        </div>
    )
}

export default MainPage