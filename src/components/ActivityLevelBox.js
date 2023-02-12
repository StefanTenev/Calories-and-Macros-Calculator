import React from "react";
import './ActivityLevelBox.css'

const ActivityLevelBox = (props) => {
    
    return (
         <div className="ActivityLevelBox" 
              onClick={props.onClick} 
              style={ props.selected ? {backgroundColor: 'hsl(0, 87%, 29%)', color: 'rgb(200,200,200)'} : {}}
              >
            <h3>{props.title}</h3>
            <p>{props.text}</p>
         </div>
    );
  }

  export default ActivityLevelBox