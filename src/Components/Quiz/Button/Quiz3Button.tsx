/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable react/react-in-jsx-scope */

import { CSSProperties } from "@material-ui/styles";

/* eslint-disable react/require-default-props */
interface QuizButtonProps{
    content: JSX.Element;
    id: string 
    className: string;
    onClick: () => void;
    active: boolean;
    styleDiv?:CSSProperties;
}

export const Quiz3Button= (props: QuizButtonProps):JSX.Element => {
    const ButtonStyle: CSSProperties = {
        marginTop: "-5vh",
        background: "none",
        borderColor: "blue",
        borderWidth: "11px",
        borderRadius: "15px",
        margin:"auto",
        display:"block"
    }
    const maxWith: CSSProperties = {
        maxWidth: "100%",
        maxHeight: "100%",
        fontSize: "10vh"
    };

    const active = props.active ?? true;
    if (active)
    {
        return (
            <div style= {props.styleDiv}>
                <button
                    id = {props.id}
                    type="button"
                    style={ButtonStyle}
                    className={props.className}
                    onClick={() => props.onClick()}
                >
                    <div
                        style={{
                            width: "30%",
                            height: "30%",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <div style={maxWith}>
                        {props.content}
                        </div>
                    </div>
                </button>
            </div>
        );
    }
    return(
        <button className="buttonInvisible" type="button">
            {" "}
        </button>

    );

}