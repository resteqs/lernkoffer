/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable react/react-in-jsx-scope */

import { CSSProperties } from "@material-ui/styles";

/* eslint-disable react/require-default-props */
interface QuizButtonProps{
    content: JSX.Element;
    id: string 
    float;
    className: string;
    onClick: () => void;
    active: boolean;
    styleDiv?:CSSProperties;

}

export const QuizButton = (props: QuizButtonProps):JSX.Element => {
    const ButtonStyle: CSSProperties = {
        marginLeft: "150px",
        marginRight: "150px",
        marginTop: "60px",
        float: props.float,
        background: "none",
        borderColor: "blue",
        borderWidth: "11px",
        borderRadius: "15px",
    }
    const maxWith: CSSProperties = {
        maxWidth: "500px",
        maxHeight: "500px",
        marginTop: "45px",
        fontSize: "190px"
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
                            width: "500px",
                            height: "500px",
                            display: "flex",
                            justifyContent: "center",
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