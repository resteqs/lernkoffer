import React from 'react';
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const Trash = (props:any) => {

   return(

     <div draggable
     className="trash"
     // eslint-disable-next-line react/prop-types
     onDragStart={props.onDragStart}>
     {/* eslint-disable-next-line react/prop-types */}
     <p>{props.name}</p>
     <p>{props.id}</p>
     <img src={props.ob} alt="N/A"/>
     </div>
   )
}
export default Trash
