
import * as React from 'react';

export interface CardProps {
    id:string,
    image:string,
    front:string,
    solved?:boolean,
    flipped?: boolean
}

export const MemoryCardsComponent = (props:CardProps):JSX.Element => {
    const [isflipped, setIsflipped] = React.useState(false)
    const [issolved, setIsSolved] = React.useState(false)
    const [isFrontImage, setFrontImage] = React.useState("")
    const cardImage = document.getElementById("cardImage")

    // , width:"100vw", margin:"auto", marginTop:"0px",  , justifyItems:"baseline" 
    return(
        <div style={{ overflow: "hidden", clear: "both", display:"inline-block" }}>
            <button  style={{ width: "15vw", margin:"10px" }} type='button' onClick={()=>setIsflipped(!isflipped)}>
                {isflipped === false? <img  style={{ height: "auto", width:"100%" }} src= {props.front} alt="" />: <img style= {{ width: "100%" }} src= {props.image} alt="" />}
                
            </button>
        </div>
    );
    
}