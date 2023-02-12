import React from "react";
import ActivityLevelBox from "./ActivityLevelBox";

const ActivityLevelContainer = (props) => {
    const [activity, setActivity] = React.useState()

    function clickHandler(stringToSetStateTo){
        setActivity(stringToSetStateTo)
        console.log(activity)
    }

    return (
         <div style={{
                    display: 'flex',
                    gap: '5px'
         }}>
            <ActivityLevelBox onClick={() => clickHandler('SedetaryLife')} title="Sedetary Life" text="Little to no exercise."/>
            <ActivityLevelBox onClick={() => clickHandler('SparselyActive')} title="Sparsely Active" text="Slight exercise or sports 1-3 times a week."/>
            <ActivityLevelBox onClick={() => clickHandler('FairlyActive')} title="Fairly Active" text="Moderate exercise or sports 3-5 times a week."/>
            <ActivityLevelBox onClick={() => clickHandler('EspeciallyActive')} title="Especially Active" text="Rigorous exercise or sports 6-7 times a week."/>
            <ActivityLevelBox onClick={() => clickHandler('ExtremelyLife')} title="Extremely Life" text="Daily rigorous exercise or sports alongside a physical job."/>
         </div>
    );
  }

  export default ActivityLevelContainer