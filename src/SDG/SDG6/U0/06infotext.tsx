// eslint-disable-next-line unicorn/filename-case
import * as React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import logo06 from "./logo06.png";

// eslint-disable-next-line react/prefer-stateless-function
export class infotext06 extends React.Component {
    render(): JSX.Element {
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
                        <p className="header">SDG 6</p>
                        <p className="subheading1">Why</p>
                        <div className="infoText">
                            <p>It is a human right to have access to water, sanitation and hygiene.</p>
                            <p>
                                Water is very important not only to health, but also to poverty reduction, food
                                security, peace and human rights, ecosystems and education.
                            </p>
                            <p>
                                The demand for water has been faster than the population growth, and half the
                                world&rsquo;s population is already experiencing severe water scarcity at least one
                                month a year.
                            </p>
                            <p>
                                Many countries face growing challenges that are for example linked to water scarcity or
                                water pollution.
                            </p>
                        </div>
                    </div>

                    <div className="infodistancebttexts" id="section2">
                        <p className="subheading1">What is the problem?</p>
                        <div className="infoText">
                            <p>
                                In 2017, an estimated 3 billion people (for comparison: there were almost 8 billion
                                people in the world in 2020) worldwide cannot safely wash their hands at home &ndash;
                                one of the cheapest, easiest and most effective ways to prevent the spread of diseases.
                            </p>
                            <p>
                                Water, sanitation and hygiene services are also not always available at medical care
                                facilities: many facilities around the world lack basic water supplies, have no
                                sanitation services or have no soap and water or something similar, at points of care.
                                And today, 4.2 billion people are still faced with daily challenges accessing even the
                                most basic of services. Of these, 673 million people have to go to the toilet in public.
                            </p>
                        </div>
                    </div>

                    <div className="infodistancebttexts" id="section3">
                        <p className="subheading1">How is this topic connected to us?</p>
                        <div className="infoText">
                            <p>
                                It will be harder to predict in many places if water will be available. In some regions,
                                droughts are making water scarcity worse and because of that people&rsquo;s health and
                                productivity is negatively impacted. In addition, it threatens nature in general, for
                                example the biodiversity (which means the number and types of plants and animals that
                                exist in a particular area or in the world generally) and the ability of ecosystems to
                                adjust to a changing environment worldwide.
                            </p>
                            <p>
                                When we can ensure that everyone has access to sustainable water and sanitation
                                services, it will help us to moderate the climate change. By managing our water
                                sustainably, we are also able to better manage our production of food and energy and
                                contribute to decent work and economic growth. Without better infrastructure and
                                management, millions of people will continue to die every year from water-related
                                diseases such as malaria.
                            </p>
                        </div>
                    </div>

                    <div id="section4">
                        <p className="subheading1">What can we do?</p>
                        <div className="infoText">
                            <p>
                                For example, you can help civil society organizations with promoting the inclusion of
                                women, youth and indigenous communities in water resources governance. Generating
                                awareness of these roles and turning them into action will lead to win-win results and
                                increased sustainability and integrity for both human and ecological systems. You can
                                also get involved in the World Water Day and World Toilet Day campaigns that aim to
                                provide information and inspiration to take action on hygiene issues.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
