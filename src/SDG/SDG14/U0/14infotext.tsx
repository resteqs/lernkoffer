// eslint-disable-next-line unicorn/filename-case
import * as React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import logo14 from "./logo14.png";

// eslint-disable-next-line react/prefer-stateless-function
export class infotext14 extends React.Component {
    render(): JSX.Element {
        return (
            <div>
                <nav className="infoNav">
                    <div className="infoHeader">SDG 14</div>
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
                            How is the ocean connected to us?
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
                    <img className="infoLogo" src={logo14} alt="" />
                </nav>

                <div>
                    <div className="infodistancebttexts" id="section1">
                        <p className="lineHeight">_</p>
                        <p className="header">SDG 14</p>
                        <p className="subheading1">Why</p>
                        <div className="infoText">
                            <p>
                                The oceans support the life of our planet, manage our climate, provide us with a healthy
                                environment and many goods we can trade.
                            </p>
                            <p>
                                Nearly 1 000 000 species are living in our sea and it holds a large amount of
                                possibilities which have not been discovered by scientists yet.
                            </p>
                            <p>
                                Because we made so much use of the oceans for many years without worrying about the
                                consequences, they are in danger now.
                            </p>
                            <p>
                                Our actions to protect the marine environments and the fisheries with small areas are
                                not enough to make up for the damages we caused.
                            </p>
                        </div>
                    </div>

                    <div className="infodistancebttexts" id="section2">
                        <p className="subheading1">What is the problem?</p>
                        <div className="infoText">
                            <p>
                                The ocean ensures that there is not too much CO<sub>2</sub> (= &ldquo;carbon
                                dioxide&rdquo;) in the air by absorbing around 23 % of our CO<sub>2</sub> emissions per
                                year. In this way it also helps moderate the effects of climate change.
                            </p>
                            <p>
                                In addition, it has absorbed more than 90 % of the excess heat in the climate system.
                                Therefore, the temperature of the ocean is at record levels which causes wide-spread
                                marine heatwaves (= unusually high sea temperatures in a region over a long period of
                                time). Because of this many animals and their habitats are threatened, and coral reefs
                                die around the world.
                            </p>
                            <p>
                                Another issue is the 5 to 12 million metric tonnes of plastic which enters the ocean
                                every year. That equals one truckload per minute.
                            </p>
                            <p>
                                Since 80% of all tourism takes place in coastal areas it can be a major threat to the
                                natural resources, and to the local culture and industry if it is not carefully managed.
                            </p>
                        </div>
                    </div>

                    <div className="infodistancebttexts" id="section3">
                        <p className="subheading1">How is the ocean connected to us?</p>
                        <div className="infoText">
                            <p>
                                Marine fisheries provide 57 million jobs worldwide and they supply over 50 % of the
                                population in least developed countries with protein (= component of our food, e. g.
                                important for muscles and organs).
                            </p>
                            <p>
                                Besides that, maritime transport is climate-resilient and around 80 % of all
                                international goods are shipped over the sea.
                            </p>
                            <p>Moreover, about 680 million people live in low-lying coastal areas.</p>
                        </div>
                    </div>

                    <div id="section4">
                        <p className="subheading1">What can we do?</p>
                        <div className="infoText">
                            <p>
                                When we buy products or eat maritime food, we should make choices which benefit the
                                ocean, e. g. buying certified products and consume only what is necessary.
                            </p>
                            <p>
                                Furthermore, we should reduce our plastic usage as much as possible and organize beach
                                clean-ups.
                            </p>
                            <p>The most important thing is to raise awareness of the endangered marine life. </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
