import { StringLiteralLike } from "typescript";
import * as React from "react"
import { Link } from "react-router-dom";

interface LogoButtonProps {
    URL:string
    Logo:string
}
export const LogoButton = (props: LogoButtonProps): JSX.Element => {
    return (
        <Link to={props.URL}>
            <img style = {{ width:"200px", margin:"30px", marginTop:"0px",  display:"inline-block", float: "left" }} src={props.Logo} alt="" />
        </Link>
    );
}