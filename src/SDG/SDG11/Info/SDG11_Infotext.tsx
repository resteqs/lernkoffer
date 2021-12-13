// eslint-disable-next-line unicorn/filename-case
import * as React from "react";
import { Link } from "react-scroll";
import logo11 from "./logo11.png";

// eslint-disable-next-line react/prefer-stateless-function
export class SDG11_Infotext extends React.Component {
    render(): JSX.Element {
        return (
            <div>
                <nav className="infoNav">
                    <div className="infoHeader">SDG 11</div>
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
                            How does it affect us?
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
                    <img className="infoLogo" src={logo11} alt="" />
                </nav>

                <div>
                    <div className="infodistancebttexts" id="section1">
                        <p className="lineHeight">_</p>
                        <p className="header">Goal 11: Sustainable Cities and Communities</p>
                        <p className="subheading1">Why</p>
                        <div className="infoText">
                            <p>
                                The number of people living in urban areas increases rapidly and with this comes many
                                problems the civilization has to face. As there is worsening air pollution, inadequate
                                infrastructure, and services as well as unplanned urban sprawl. Furthermore, safe public
                                transportation, reliable basic services, and open public spaces are extremely important
                                to ensure the health of the population.
                            </p>
                        </div>
                    </div>

                    <div className="infodistancebttexts" id="section2">
                        <p className="subheading1">What is the problem?</p>
                        <div className="infoText">
                            <p>
                                The biggest issue is beyond doubt the fact that a big part of some cities are slums in
                                which people have no or hardly access to a functioning infrastructure, water,
                                sanitation, and waste management to make no mention of the inadequate housing
                                conditions. This also comes along with the rising overcrowding of public transportation
                                and health-care facilities.
                            </p>
                            <p>
                                If people do not have access to public transportation systems, they more or less are
                                forced to drive on their own what causes huge pollution and so is bad for our climate.
                            </p>
                        </div>
                    </div>

                    <div className="infodistancebttexts" id="section3">
                        <p className="subheading1">How does it affect us? </p>
                        <div className="infoText">
                            <p>
                                In numbers spoken that means in the year 2000 circa 28 percent of the urban population
                                worldwide lived in slums whereas the number lessened until 2014 to 23 percent
                                unfortunately in 2018 there was 24 percent representing over 1 billion people.
                            </p>
                            <p>
                                Also, according to 2019 data from 610 cities in 95 countries, only half the
                                world&rsquo;s urban population has access to low-capacity transport systems
                                (buses/trams) within a range of 500 meters walking distance and access to high-capacity
                                transport systems (trains/subways/ferries) within a range of 1,000 meters walking
                                distance. &nbsp;
                            </p>
                        </div>
                    </div>

                    <div id="section4">
                        <p className="subheading1">What can we do?</p>
                        <div className="infoText">
                            <p>
                                It would be a huge improvement if more people who have access to public transportation
                                systems would use them and not drive on their own or what would be even better if more
                                people would drive more on a bicycle or go by foot.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
