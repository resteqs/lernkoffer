import React from "react";
import Logo from "../../../SDGLogos/Goal-SDG06.png";
import ReactPlayer from "react-player";
import infotextbutton from "../../../styles/Infotextbutton.module.css";
import { Link } from "react-router-dom";

export const Video = (): JSX.Element => {
    const sdg = "SDG06";
    let buttonNext;

    // eslint-disable-next-line prefer-const
    buttonNext =
        
            <div style={{ marginTop: "10px" }} className="nextbutton">
                <Link to="/Vorlagen/Endscreen">
                <div style={{ position: "absolute", top: "950px", left: "1700px" }}>
                    <button className={infotextbutton.pushable} type="button" >
                        <span className={infotextbutton.shadow} />
                        <span className={infotextbutton.edgegreen} />
                        <span className={infotextbutton.front} style={{ backgroundColor: "green" }}>
                            <p className={infotextbutton.buttontext}>Fertig</p>
                        </span>
                    </button>
                </div>
                </Link>
            </div>
       

    return( <div>
        <div className={`colour_${sdg}_header`}>
            <div className="header">
                 Video
                <img className="sdglogo" alt="logo" src={Logo} />
            </div>
        </div>
        <div style = {{ display: 'flex' ,justifyContent: "center" , alignItems: "center", marginTop: "120px" }}><ReactPlayer
        url="https://www.youtube.com/watch?v=UVCP4bKy9Iw" width="1366px" height="720px"
      /></div>
      {buttonNext}
    </div>)
}