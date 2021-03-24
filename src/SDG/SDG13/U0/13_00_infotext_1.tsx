// eslint-disable-next-line unicorn/filename-case
import * as React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

// eslint-disable-next-line react/prefer-stateless-function
export class infopage extends React.Component {
    render(): JSX.Element {
        return (
            <div>
                <nav className="infoNav">
                    <div className="infoLogo">SDG 13</div>
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
                            How does climate change affect us?
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
                </nav>

                <div>
                    <div className="infodistancebttexts" id="section1">
                        <p className="header">Why</p>
                        <div className="infoText">
                            <p>
                                The climate crisis continues unabated as the global community shies away from the full
                                commitment required for its reversal.
                            </p>
                            <p>
                                2010-2019 was the warmest decade ever recorded, bringing with it massive wildfires,
                                hurricanes, droughts, floods and other climate disasters across continents.
                            </p>
                            <p>
                                If left unchecked, climate change will cause average global temperatures to increase
                                beyond 3°C and will adversely affect every ecosystem.
                            </p>
                            <p>
                                Already, we are seeing its impacts, causing threats like food and water scarcity, which
                                can lead to conflicts.
                            </p>
                        </div>
                    </div>

                    <div className="infodistancebttexts" id="section2">
                        <p className="header">What is the problem?</p>
                        <div className="infoText">
                            <p>
                                Next to causing immense problems to human existence by affecting us with its impacts,
                                the biggest one of them all is our lack of commitments required to reverse the climate
                                crisis. We are seeing and feeling the extend of this crisis but still shy away to admit
                                and take responsibility.
                            </p>
                        </div>
                    </div>

                    <div className="infodistancebttexts" id="section3">
                        <p className="header">How does climate change affect us?</p>
                        <div className="infoText">
                            <p>2019 was the second warmest year on record.&nbsp;</p>
                            <p>Global temperatures are projected to rise by up to 3,2&deg; C by 2100.&nbsp;</p>
                            <p>
                                Climate change continues to exacerbate the frequency and severity of natural disasters,
                                affecting more than 39 million people in 2019.&nbsp;
                            </p>
                            <p>
                                Furthermore, climate change can also lead to conflicts about food, water and resources,
                                for example.&nbsp;
                            </p>
                        </div>
                    </div>
                    
                    <div id="section4">
                        <p className="header">What can we do?</p>
                        <div className="infoText">
                            <p>
                                To address climate change, we&nbsp;have to&nbsp;vastly increase our efforts. Much is
                                happening around the world&nbsp;-which is great-&nbsp;but so much more needs to be
                                done.&nbsp;&nbsp;
                            </p>
                            <p>
                                In 2015, the world took a significant first step by adopting the Paris Agreement, in
                                which all countries committed to take action to address climate change.&nbsp;&nbsp;
                            </p>
                            <p>
                                Every single one of us can make an impact by informing ourselves, doing everything in
                                our power to tackle this issue and by bringing attention to it.&nbsp;&nbsp;
                            </p>
                        </div>
                    </div>
                    
                </div>
            </div>
        );
    }
}
