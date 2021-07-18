import * as React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import logo06 from "./logo_03_01.png";

export const SDG03_Infotext = ():JSX.Element => {
    return (
        <div>
            <nav className="infoNav">
                <div className="infoHeader">SDG 6</div>
                <div className="infoNavLinks">
                    <Link
                        activeClass="active"
                        to="section1"
                        // eslint-disable-next-line react/jsx-boolean-value
                        spy={true}
                        // eslint-disable-next-line react/jsx-boolean-value
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        Why?
                    </Link>
                    <Link
                        activeClass="active"
                        to="section2"
                        // eslint-disable-next-line react/jsx-boolean-value
                        spy={true}
                        // eslint-disable-next-line react/jsx-boolean-value
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        What is the problem?
                    </Link>
                    <Link
                        activeClass="active"
                        to="section3"
                        // eslint-disable-next-line react/jsx-boolean-value
                        spy={true}
                        // eslint-disable-next-line react/jsx-boolean-value
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        How is this topic connected to us?
                    </Link>
                    <Link
                        to="section4"
                        activeClass="active"
                        // eslint-disable-next-line react/jsx-boolean-value
                        spy={true}
                        // eslint-disable-next-line react/jsx-boolean-value
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        What can we do?
                    </Link>
                </div>
                <img className="infoLogo" src={logo06} alt="" />
            </nav>

            <div>
                <div className="infodistancebttexts" id="section1">
                    <p className="lineHeight">_</p>
                    <p className="header">Goal 3: Good health and well-being</p>
                    <p className="subheading1">Why</p>
                    <div className="infoText">
                        <p>It is important to building prosperous societies. Most countries, especially poor countries, have not enough health facilities, medical supplies and health care workers.</p>
                        <p>In case of a health emergency people can be pushed into bankruptcy or poverty in every country, no matter its wealth. We have to coordinate our efforts to achieve universal health coverage and sustainable financing for health.</p>
                        <p>In addition, we are challenged by new emerging health hazards.</p>
                    </div>
                </div>

                <div className="infodistancebttexts" id="section2">
                    <p className="subheading1">What is the problem?</p>
                    <div className="infoText">
                        <p>Progress in many health areas, such as in reducing maternal and child mortality, in increasing coverage of immunization, and in reducing some infectious diseases, continues, but the rate of improvement has slowed down.</p>
                        <p>An estimated 19.4 million children did not receive the es-sential vaccines during the first year of life in 2018. Although immunization (the process of giving a vaccine to a person to protect them against disease) is one of the world&rsquo;s most suc-cessful and cost-effective health interventions.</p>
                        <p>In 2017, only around one third to half of the global population was covered by essential health services.</p>
                    </div>
                </div>

                <div className="infodistancebttexts" id="section3">
                    <p className="subheading1">How is this topic connected to us?</p>
                    <div className="infoText">
                        <p>Diseases and deaths from communicable diseases will spike. However, it requires a strong commitment to ensure healthy lives for all.</p>
                        <p>But it is important because the benefits out-weigh the cost. Healthy people are the foundation for healthy economies.</p>    
                    </div>
                </div>

                <div id="section4">
                    <p className="subheading1">What can we do?</p>
                    <div className="infoText">
                        <p>You can start by promoting and protecting your own health and the health of those around you, by making well-informed choices and for example vaccinating yourself and your future children.</p>
                        <p>You can raise awareness in your community about the importance of good health, healthy lifestyles as well as people&rsquo;s right to quality health care services, especially for the most vulnerable such as women and children.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
