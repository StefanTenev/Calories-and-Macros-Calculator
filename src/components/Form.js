
import React from 'react';
import ReactDOM from 'react-dom/client';
import InputBox from './InputBox';
import Input from './Input';
import ActivityLevelBox from './ActivityLevelBox';

function Form() {
    const [weight, setWeight] = React.useState('')
    const [age, setAge] = React.useState('')
    const [height, setHeight] = React.useState('')
    const [sex, setSex] = React.useState('')

    const [weightUnits, setWeightUnits] = React.useState('KGs')
    const [heightUnits, setHeightUnits] = React.useState('CMs')
    

    const [activity, setActivity] = React.useState('')

    let bmr;
    let bmrString = '';
    let finalValue;


    if(age !== '' || weight !== '' || height !== '' || activity !== '' ||  sex !== '') {
       bmrString = ((66.5 + (13.75 * weight) + (5.003 * height) - (6.75 * age)) * activity).toFixed(2)

        if(Number(bmrString[bmrString.length - 1]) >= 5 ){
            bmr = parseFloat(bmrString) + 0.1
            finalValue = bmr.toFixed(1)
        }else{
            bmr = parseFloat(bmrString)
            finalValue = bmr.toFixed(1)
        }
    }
    
    
    

    let weightInput = React.useRef(0)
    
    let weightSelect = React.useRef()

    let heightInput = React.useRef()
    let heightSelect = React.useRef()

    let sexInput = React.useRef()
    let sexSelect = React.useRef()

    let ageInput = React.useRef(0)
    let ageSelect = React.useRef()

    function changeHandler(e, setStateFunction) {
        setStateFunction(Number(e.target.value)) 
    }
    
    function optionsChangeHandler(e, setStateFunction){
        setStateFunction(e.target.value) 
       
    }

    
    function clickHandler(e, stringToSetStateTo){
        setActivity(stringToSetStateTo)
        console.log(finalValue, sex, weight, height, age)

    }

    let finalValRef = React.useRef()
    

  return (
    <form className="App" onSubmit={(e) =>{e.preventDefault()}}
          style={{
                backgroundColor: 'hsl(168, 35%, 9%)',
                padding: '1rem',
                borderRadius: '5px',
                width: '55%',
                margin: '0 auto'
          }}
        >
      <InputBox  ref={weightSelect} changeHandler={(e) => optionsChangeHandler(e, setWeightUnits)} inputLabel='Weight'options={['KGs','Pounds', 'Stones']}>
      <Input changeHandler={(e) => changeHandler(e, setWeight)} idForInputLabel='Weight'  ref={weightInput} />
        
      </InputBox>
      <InputBox ref={heightSelect}  changeHandler={(e) => optionsChangeHandler(e, setHeightUnits)} inputLabel='Height'options={['CMs','Meters', 'Feet/Inches']}>
      {height == 'Feet/Inches' ? <><p>ft</p><Input feetAndInches={weight == 'Feet/Inches' ? true : false }changeHandler={(e) => changeHandler(e, setHeight)} idForInputLabel='Height'  ref={heightInput} />
                                     <p>in</p><Input feetAndInches={weight == 'Feet/Inches' ? true : false }changeHandler={(e) => changeHandler(e, setHeight)} idForInputLabel='Height'  ref={heightInput} />
        </> : <Input changeHandler={(e) => changeHandler(e, setHeight)} idForInputLabel='Height'  ref={heightInput} />}
      
      </InputBox>
      <InputBox ref={sexSelect}  changeHandler={(e) => optionsChangeHandler(e, setSex)} inputLabel='Sex'options={['Select Sex', 'Male', 'Female']} />
      <InputBox inputLabel='Age'options={['Years']}>
      <Input changeHandler={(e) => changeHandler(e, setAge)} idForInputLabel='Age' ref={ageInput} />
      </InputBox>
      <h2 style={{color: 'rgb(210, 210, 210)'}}>Select An Activity Level:</h2>
      <div style={{
                    display: 'flex',
                    gap: '5px'
         }}>
            <ActivityLevelBox selected={activity == 1.2 ? true : false} onClick={(e) => clickHandler(e, 1.2)} title="Sedetary Life" text="Little to no exercise."/>
            <ActivityLevelBox selected={activity == 1.375 ? true : false} onClick={(e) => clickHandler(e, 1.375)} title="Sparsely Active" text="Slight exercise or sports 1-3 times a week."/>
            <ActivityLevelBox selected={activity == 1.55 ? true : false} onClick={(e) => clickHandler(e, 1.55)} title="Fairly Active" text="Moderate exercise or sports 3-5 times a week."/>
            <ActivityLevelBox selected={activity == 1.725 ? true : false} onClick={(e) => clickHandler(e, 1.725)} title="Especially Active" text="Rigorous exercise or sports 6-7 times a week."/>
            <ActivityLevelBox selected={activity == 1.9 ? true : false} onClick={(e) => clickHandler(e, 1.9)} title="Extremely Active" text="Daily rigorous exercise or sports alongside a physical job."/>
         </div>
          
      <h2 ref={finalValRef} style={{color: 'rgb(210, 210, 210)'}}>
      {age == '' || weight == '' || height == '' || activity == '' ||  sex == '' ? 'Please Fill All Sections and Select an Activity Level' 
      : <>Your Total Daily Energy Expenditure : <br/> {finalValue} Cal</>}
      </h2>'
          
      
    </form>
  );
}

export default Form;
