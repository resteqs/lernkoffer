// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { CSSProperties } from "react";
import { Link } from "react-router-dom";
import "./styles/help.css";

export const Help = (): JSX.Element => {
    const table:CSSProperties = {
        margin:"10px",
        fontSize:"60px",
        marginBottom: "30px",
        marginTop: "40px",
        textAlign:"center" ,
               
    }
    return (
        <div style={{ margin: "10px" }} >
            <p className="rainbow-text" style={table}>Navigation</p>
            <table className="tg">
                <thead>
                    <tr >
                        <th className="tg-46yj">SDG01</th>
                        <th className="tg-46yj">SDG02</th>
                        <th className="tg-46yj">SDG03</th>
                        <th className="tg-46yj">SDG04</th>
                        <th className="tg-46yj">SDG05</th>
                        <th className="tg-46yj">SDG06</th>
                        <th className="tg-46yj">SDG07</th>
                        <th className="tg-46yj">SDG08</th>
                        <th className="tg-46yj">SDG09</th>
                    </tr>
                </thead>
                <tbody style={{ fontSize: "50px" }}>
                    <tr>
                        <td className="tg-c3ow"><Link to ="/SDG01/FreieArbeit">Freie Arbeit - Collage</Link></td>
                        <td className="tg-c3ow"><Link to ="/SDG02/FreieArbeit">Freie Arbeit</Link></td>
                        <td className="tg-c3ow"><Link to ="/SDG03/FreieArbeit">Freie Arbeit - Empowerment</Link></td>
                        <td className="tg-c3ow"><Link to ="/SDG04/FreieArbeit">Freie Arbeit - Wunschschule</Link></td>
                        <td className="tg-c3ow"><Link to ="/SDG05/FreieArbeit">Freie Arbeit - Rollenspiel</Link></td>
                        <td className="tg-c3ow"><Link to ="/SDG06/FreieArbeit">Freie Arbeit - Forschertagebuch</Link></td>
                        <td className="tg-c3ow"><Link to ="/SDG07/FreieArbeit">Experiment - Kartoffel garen</Link></td>
                        <td className="tg-c3ow"><Link to ="/SDG08/FreieArbeit">Freie Arbeit - Traumberuf</Link></td>
                        <td className="tg-c3ow"><Link to ="/SDG09/FreieArbeit">Freie Arbeit - Teamwork</Link></td>
                    </tr>
                    <tr>
                        <td className="tg-c3ow"><Link to ="/SDG01/GutesBeispiel">Gutes Beispiel - Misereor</Link></td>
                        <td className="tg-c3ow"><Link to ="/SDG02/GutesBeispiel">Gutes Beispiel - Welthungerhilfe</Link></td>
                        <td className="tg-c3ow"><Link to ="/SDG03/GutesBeispiel">Gutes Beispiel - ??rzte ohne Grenzen </Link></td>
                        <td className="tg-c3ow"><Link to ="/SDG04/GutesBeispiel">Gutes Beispiel - Malala Yousafzai</Link></td>
                        <td className="tg-c3ow"><Link to ="/SDG05/GutesBeispiel">Gutes Beispiel - Statues of Equality</Link></td>
                        <td className="tg-c3ow">
                            <Link to ="/SDG06/GutesBeispiel">Gute Beispiele</Link>
                            <p>und</p>
                            <Link to ="/SDG06/GutesBeispielQuiz">Gute Beispiele - Quiz</Link>
                        </td>
                        <td className="tg-c3ow"><Link to ="/SDG07/VideoWindrad">Video Windrad</Link></td>
                        <td className="tg-c3ow"><Link to ="/SDG08/GutesBeispiel">Gutes Beispiel - YouthCan</Link></td>
                        <td className="tg-c3ow"><Link to ="/SDG09/GutesBeispiel">Gutes Beispiel - ITU</Link></td>

                    </tr>
                    <tr>
                        <td className="tg-c3ow"><Link to ="/SDG01/Infotext">Infotext</Link></td>
                        <td className="tg-c3ow">
                            <Link to ="/SDG02/Infotext/Infotext">Infotext</Link>
                            <p>und</p>
                            <Link to ="/SDG02/Infotext/Fabel">Einstiegsfabel</Link>
                        </td>
                        <td className="tg-c3ow"><Link to ="/SDG03/Infotext">Infotext</Link></td>
                        <td className="tg-c3ow"><Link to ="/SDG04/Infotext">Infotext</Link></td>
                        <td className="tg-c3ow">
                            <Link to ="/SDG05/Infotext">Infotext</Link>
                            <p> und </p>
                            <Link to ="/SDG05/Einstieg">Positionierungsspiel</Link>
                            </td>
                        <td className="tg-c3ow"><Link to ="/SDG06/Infotext">Infotext</Link></td>
                        <td className="tg-c3ow"><Link to ="/SDG07/Infotext">Infotext</Link></td>
                        <td className="tg-c3ow"><Link to ="/SDG08/Infotext">Infotext</Link></td>
                        <td className="tg-c3ow"><Link to ="/SDG09/Infotext">Infotext</Link></td>
                    </tr>
                    <tr>
                        <td className="tg-c3ow"><Link to ="/SDG01/Spiel">Spiel - Wer verdient mehr </Link></td>
                        <td className="tg-c3ow"><Link to ="/SDG02/Spiel">Spiel - Wo isst man was? </Link></td>
                        <td className="tg-c3ow"><Link to ="/SDG03/Spiel">Spiel - So sieht es in meinem Kopf aus</Link></td>
                        <td className="tg-c3ow"><Link to ="/SDG04/Spiel1/SDG04_Spiel">Spiel - Activity</Link></td>
                        <td className="tg-c3ow"><Link to ="/SDG05/Spiel">Info - Starke Frauen</Link></td>
                        <td className="tg-c3ow"><Link to ="/SDG06/Spiel">Spiel - Wassertour</Link></td>
                        <td className="tg-c3ow"><Link to ="/SDG07/Spiel">Spiel - Memory</Link></td>
                        <td className="tg-c3ow"><Link to ="/SDG08/Spiel">Quiz - Menschenw??rde </Link></td>
                        <td className="tg-c3ow"><Link to ="/SDG09/Spiel">Spiel - Stille Post</Link></td>
                    </tr>
                    <tr>
                      
                        <td className="tg-c3ow"><Link to ="/SDG01/Quiz">Quiz - Was solltest du eher kaufen</Link></td>
                        <td className="tg-c3ow"><Link to ="/SDG02/Quiz">Ern??hrungsquiz</Link></td>
                        <td className="tg-c3ow"><Link to ="/SDG03/Quiz">Info + Quiz - Legale Drogen</Link></td>
                        <td className="tg-c3ow"><Link to ="/SDG04/Quiz">Quiz</Link></td>
                        <td className="tg-c3ow"><Link to ="/SDG05/Quiz">Quiz - Geh??rt sich das?</Link></td>
                        <td className="tg-c3ow"><Link to ="/SDG06/Quiz">Quiz - T??glicher Wasserbedarf</Link></td>
                        <td className="tg-c3ow"><Link to ="/SDG07/Quiz">Quiz - Energieverbrauch</Link></td>
                        <td className="tg-c3ow"><Link to ="/SDG08/Quiz">Quiz - Kinderarbeit</Link></td>
                        <td className="tg-c3ow"><Link to ="/SDG09/Quiz">Quiz - Technische Innovation</Link></td>

                    </tr>
                    <tr>
                        <td className="tg-c3ow"><Link to ="/SDG01/Video">Video</Link></td>
                        <td className="tg-c3ow"><Link to ="/SDG02/Video">Video</Link></td>
                        <td className="tg-c3ow"><Link to ="/SDG03/Video">Video</Link></td>
                        <td className="tg-c3ow"><Link to ="/SDG04/Video">Video</Link></td>
                        <td className="tg-c3ow"><Link to ="/SDG05/Video"> </Link></td>
                        <td className="tg-c3ow"><Link to ="/SDG06/Video">Video</Link></td>
                        <td className="tg-c3ow"><Link to ="/SDG07/VideoWasserstoff">Video Wasserstoff </Link></td>
                        <td className="tg-c3ow"><Link to ="/SDG08/Video">Video </Link></td>
                        <td className="tg-c3ow"><Link to ="/SDG09/Video">Video </Link></td>
                    </tr>
                </tbody>
            </table>
            <table className="tg">
                <thead>
                    <tr>
                        <th className="tg-46yj">SDG10</th>
                        <th className="tg-46yj">SDG11</th>
                        <th className="tg-46yj">SDG12</th>
                        <th className="tg-46yj">SDG13</th>
                        <th className="tg-46yj">SDG14</th>
                        <th className="tg-46yj">SDG15</th>
                        <th className="tg-46yj">SDG16</th>
                        <th className="tg-46yj">SDG17</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="tg-c3ow"><Link to ="/SDG10/FreieArbeit">Freie Arbeit - Integrativer Spielplatz</Link></td>
                        <td className="tg-c3ow"><Link to ="/SDG11/FreieArbeit">Freie Arbeit - Collage</Link></td>
                        <td className="tg-c3ow"><Link to ="/SDG12/FreieArbeit">Freie Arbeit - Kunst aus M??ll</Link></td>
                        <td className="tg-c3ow"><Link to ="/SDG13/FreieArbeit">Freie Arbeit - Menschenkette</Link></td>
                        <td className="tg-c3ow"><Link to ="/SDG14/FreieArbeit">Freie Arbeit - Collage</Link></td>
                        <td className="tg-c3ow"><Link to ="/SDG15/FreieArbeit">Experiment - Kressehang</Link></td>
                        <td className="tg-c3ow"><Link to ="/SDG16/FreieArbeit">Freie Arbeit - Konfliktl??sungsstrategien</Link></td>
                        <td className="tg-c3ow"><Link to ="/SDG17/FreieArbeit">Freie Arbeit - Motivationsbild</Link></td>
                    </tr>
                    <tr>
                        <td className="tg-c3ow"><Link to ="/SDG10/GutesBeispiel">Gutes Beispiel - UN</Link></td>
                        <td className="tg-c3ow"><Link to ="/SDG11/GutesBeispiel">Experiment - Bau eines Insektenhotels</Link></td>
                        <td className="tg-c3ow"><Link to ="/SDG12/GutesBeispiel">Gutes Beispiel - Plastik aus Mais</Link></td>
                        <td className="tg-c3ow"><Link to ="/SDG13/GutesBeispiel">Domino - Umweltschutzkette</Link></td>
                        <td className="tg-c3ow"><Link to ="/SDG14/GutesBeispiel">Gutes Beispiel - MSC</Link></td>
                        <td className="tg-c3ow"><Link to ="/SDG15/GutesBeispiel">Gutes Beispiel - WWF</Link></td>
                        <td className="tg-c3ow"><Link to ="/SDG16/GutesBeispiel">Gutes Beispiel - PBI</Link></td>
                        <td className="tg-c3ow"><Link to ="/SDG17/GutesBeispiel">Gutes Beispiel - UN</Link></td>
                    </tr>
                    <tr>
                        <td className="tg-c3ow"><Link to ="/SDG10/Infotext">Infotext</Link></td>
                        <td className="tg-c3ow"><Link to ="/SDG11/Infotext">Infotext</Link></td>
                        <td className="tg-c3ow"><Link to ="/SDG12/Infotext">Infotext</Link></td>
                        <td className="tg-c3ow"><Link to ="/SDG13/Infotext">Infotext</Link></td>
                        <td className="tg-c3ow"><Link to ="/SDG14/Infotext">Infotext</Link></td>
                        <td className="tg-c3ow"><Link to ="/SDG15/Infotext">Infotext</Link></td>
                        <td className="tg-c3ow"><Link to ="/SDG16/Einstieg">Einstieg</Link>
                        <p>und</p>
                        <Link to ="/SDG16/Infotext">Infotext</Link></td>
                        <td className="tg-c3ow"><Link to ="/SDG17/Infotext">Infotext</Link></td>

                    </tr>
                    <tr>
                        <td className="tg-c3ow"><Link to ="/SDG10/Spiel">Spiel - Kannst du das blind?</Link></td>
                        <td className="tg-c3ow"><Link to ="/SDG11/Spiel">Quiz - ??kologischer Fu??abdruck</Link></td>
                        <td className="tg-c3ow"><Link to ="/SDG12/Spiel">Quiz - Nachhaltiger Konsum</Link></td>
                        <td className="tg-c3ow">
                            <Link to ="/SDG13/Tutorial">Suchspiel mit Informationen</Link>
                            <p>und</p>
                            <Link to ="/SDG13/Spiel2/">Spiel - M??lltrennung</Link>
                        </td>
                        <td className="tg-c3ow"><Link to ="/SDG14/Spiel2/tutorial1">Info durch Suchspiel</Link></td>
                        <td className="tg-c3ow"><Link to ="/SDG15/Spiel">Werwolfspiel </Link></td>
                        <td className="tg-c3ow"><Link to ="/SDG16/Spiel">Teamspiel</Link></td>
                        <td className="tg-c3ow"><Link to ="/SDG17/Spiel">Spiel - Geschicklichkeitsspiel </Link></td>
                    </tr>
                    <tr>
                        <td className="tg-c3ow"><Link to ="/SDG10/Quiz">Quiz - Wie kann ich helfen?</Link></td>
                        <td className="tg-c3ow"><Link to ="/SDG11/Quiz">Antippspiel - Energiesparrallye</Link></td>
                        <td className="tg-c3ow"><Link to ="/SDG12/Quiz">Quiz - Rohstoffe</Link></td>
                        <td className="tg-c3ow"><Link to ="/SDG13/Quiz">Quiz - CO2 Aussto??</Link></td>
                        <td className="tg-c3ow"><Link to ="/SDG14/Quiz">Spiel - Schildkr??ten-Nahrung</Link></td>
                        <td className="tg-c3ow"><Link to ="/SDG15/Quiz">Quiz - Bedrohte Tierarten</Link></td>
                        <td className="tg-c3ow"><Link to ="/SDG16/Quiz">Quiz - Kinderrechtskonvention</Link></td>
                        <td className="tg-c3ow"><Link to ="/SDG17/Quiz">Wissensspiel zu allen SDGs</Link></td>
                    </tr>
                    <tr>
                        <td className="tg-c3ow"><Link to ="/SDG10/Video">Video</Link></td>
                        <td className="tg-c3ow"><Link to ="/SDG11/Video">Video</Link></td>
                        <td className="tg-c3ow"><Link to ="/SDG12/Video">Video</Link></td>
                        <td className="tg-c3ow"><Link to ="/SDG13/Video"> </Link></td>
                        <td className="tg-c3ow"><Link to ="/SDG14/Video">Video</Link></td>
                        <td className="tg-c3ow"><Link to ="/SDG15/Video">Video</Link></td>
                        <td className="tg-c3ow"><Link to ="/SDG16/Video">Video</Link></td>
                        <td className="tg-c3ow"><Link to ="/SDG17/Video">Video</Link></td>
                    </tr>
                </tbody>
            </table>
        </div>

        /* 
        <div>
            <h1 className="header">Helpful links</h1>
            <div>
            
                <Link to = "/W??rterbuch">
                    <div className="centre">W??rterbuch</div>
                </Link>



                <Link to = "/SDG01/Spiel">
                    <div className="centre">SDG 01 Spiel</div>
                </Link>

                <Link to = "/SDG1/FreieArbeit">
                    <div className="centre">SDG 01 Freie Arbeit</div>
                </Link> 

                <Link to = "/SDG1/Gute Bsp">
                    <div className="centre">SDG 01 Gutes Bsp</div>
                </Link> 

                <Link to = "/SDG01/Infotext">
                    <div className="centre">SDG 01 Infotext</div>
                </Link>





                <Link to = "/SDG02/Infotext/Infotext">
                    <div className="centre">SDG 02 Infotext Infotext</div>
                </Link>

                <Link to = "/SDG02/Infotext/Fable">
                    <div className="centre">SDG 02 Einstiegsfabel</div>
                </Link>
                
                <Link to = "/SDG02/Quiz">
                    <div className="centre">SDG 02 Quiz</div>
                </Link>

                <Link to = "/SDG02/Spiel">
                    <div className="centre">SDG 02 Spiel - Wo isst man was?</div>
                </Link>

                <Link to = "/SDG02/FreieArbeit">
                    <div className="centre">SDG 02 Freie Arebit</div>
                </Link> 

                <Link to = "/SDG02/Gute Bsp">
                    <div className="centre">SDG 02 Gutes Beispiel</div>
                </Link>
                





                <Link to = "/SDG03/FreieArbeit">
                    <div className="centre">SDG 03 Freie Arbeit</div>
                </Link>

                <Link to = "/SDG03/Gute Bsp">
                    <div className="centre">SDG 03 Gutes Beispiel</div>
                </Link>

                <Link to = "/SDG03/Infotext">
                    <div className="centre">SDG 03 infotext</div>
                </Link>





                <Link to = "/SDG04/Infotext">
                    <div className="centre">SDG 04 Infotext</div>
                </Link>

                <Link to="/SDG04/Spiel1/SDG04_Spiel">
                    <div className="centre">SDG 04 game</div>
                </Link>

                <Link to="/SDG04/Quiz">
                    <div className="centre">SDG 04 Quiz</div>
                </Link>

                <Link to = "/SDG04/FreieArbeit">
                    <div className="centre">SDG 04 Freie Arbeit</div>
                </Link>
                
                <Link to = "/SDG04/Gute Bsp">
                    <div className="centre">SDG 04 Gutes Beispiel</div>
                </Link>

                <Link to = "/SDG05/Einstieg">
                    <div className="centre">SDG 05 Einstieg</div>
                </Link>

                <Link to = "/SDG05/Infotext">
                    <div className="centre">SDG 05 Infotext</div>
                </Link>

                <Link to = "/SDG05/Quiz/Prolog">
                    <div className="centre">SDG 05 Quiz</div>
                </Link>

                <Link to = "/SDG05/Spiel">
                    <div className="centre">SDG 05 Spiel</div>
                </Link>

                <Link to = "/SDG05/GutesBeispiel">
                    <div className="centre">SDG 05 Gutes Beispiel</div>
                </Link>

                <Link to = "/SDG05/FreieArbeit">
                    <div className="centre">SDG 05 Freie Arbeit</div>
                </Link>
 
                <Link to = "/SDG06/Infotext">
                    <div className="centre">SDG 06 Infotext</div>
                </Link>
                <Link to = "/SDG07/Infotext">
                    <div className="centre">SDG 07 Infotext</div>
                </Link>




                <Link to = "/SDG08/Infotext">
                    <div className="centre">SDG 08 Infotext</div>
                </Link>

                <Link to = "/SDG08/Quiz/Prolog">
                    <div className="centre">SDG 08 Quiz</div>
                </Link>
                <Link to = "/SDG08/FreieArbeit">
                    <div className="centre">SDG 08 Freie Arbeit</div>
                </Link>





                <Link to = "/SDG09/Infotext">
                    <div className="centre">SDG 09 Infotext</div>
                </Link>

                <Link to = "/SDG09/Gute Bsp">
                    <div className="centre">SDG 09 Gutes Beispiel</div>
                </Link>

                <Link to = "/SDG09/FreieArbeit">
                    <div className="centre">SDG 09 Freie Arbeit</div>
                </Link>

                 <Link to = "/SDG09/Spiel">
                    <div className="centre">SDG 09 Spiel</div>
                </Link>







                <Link to = "/SDG10/Infotext">
                    <div className="centre">SDG 10 Infotext</div>
                </Link>






                <Link to = "/SDG11/Infotext">
                    <div className="centre">SDG 11 infotext</div>
                </Link> 
                <Link to = "/SDG11/Freie Arbeit">
                    <div className="centre">SDG 11 Freie Arbeit</div>
                </Link> 

                <Link to = "/SDG11/Gute Bsp">
                    <div className="centre">SDG 11 Gutes Beispiel</div>
                </Link>

                <Link to = "/SDG11/Spiel">
                    <div className="centre">SDG 11 Spiel</div>
                </Link>






                <Link to = "/SDG12/Infotext">
                    <div className="centre">SDG 12 infotext</div>
                </Link>





                <Link to = "/SDG13/Infotext">
                    <div className="centre">SDG 13 infotext</div>
                </Link>

                <Link to = "/SDG13/Quiz/Tutorial1">
                    <div className="centre">SDG 13 Quiz - Tutorial</div>
                </Link>

                <Link to =  "/SDG13/Quiz/Question1">
                    <div className="centre">SDG 13 Quiz - Question 1</div>
                </Link>
                <Link to =  "/SDG13/Quiz/Question2">
                    <div className="centre">SDG 13 Quiz - Question 2</div>
                </Link>
                <Link to =  "/SDG13/Quiz/Question3">
                    <div className="centre">SDG 13 Quiz - Question 3</div>
                </Link>
                <Link to =  "/SDG13/Quiz/Tips">
                    <div className="centre">SDG 13 Quiz - Tips</div>
                </Link>

                <Link to="/SDG13/Spiel1">
                    <div className="centre">SDG 13 Antippspiel (Land)</div>
                </Link>

                <Link to="/SDG13/Spiel2">
                    <div className="centre">SDG 13 Spiel 2 - M??lltrennung</div>
                </Link>






                <Link to = "/SDG14/Infotext">
                    <div className="centre">SDG 14 infotext</div>
                </Link>

                <Link to="/SDG14/Spiel2/tutorial1">
                    <div className="centre">SDG 14 tutorial</div>
                </Link>

                <Link to="/SDG14/Spiel2">
                    <div className="centre">SDG 14 Antippspiel</div>
                </Link>





                <Link to = "/SDG15/Infotext">
                    <div className="centre">SDG 15 infotext</div>
                </Link>






                <Link to = "/SDG16/Infotext">
                    <div className="centre">SDG 16 infotext</div>
                </Link>




                <Link to = "/SDG17/Infotext">
                    <div className="centre">SDG 17 infotext WIP</div>
                </Link>





                <Link to="/Vorlagen/MagicButton">
                    <div className="centre">Magic Awesome Button with magic</div>
                </Link>

                <Link to="/Vorlagen/countdown">
                    <div className="centre">Clock goes tick tack </div>
                </Link>
                
                <Link to="/Vorlagen/SimpleCountdown">
                    <div className="centre">clock (easy one) </div>
                </Link>

                <Link to="/Vorlagen/infotext">
                    <div className="centre">Infotext</div>
                </Link>

                <Link to="/Vorlagen/Quiz">  <div className="centre">Quiz vorlage</div> </Link>

                <Link to="/Vorlagen/Endscreen">
                    <div className="centre">Endscreen</div>
                </Link>

                <Link to="/Component/test">
                    <div className="centre">Quiz Test</div>
                </Link>
                
            </div>
        </div>
        */
    );
};
