import React from 'react';
import ReactDOM from 'react-dom/client';
import './InputBox.css'

const InputBox = React.forwardRef((props, ref)  => {
  // I initially wanted to add the styling directly to the component in here, but did not manage to find a way for including a
  // pseudo class without having to import other modules (such as style-it), keep in mind that I needed a pseudo CLASS, not ELEMENT
  // ...therefore I just made a css and added all the styling in there to keep in in 1 place anyway

  function createOptions(optionsArray) {
    let options = []
    for(let i = 0; i < props.options.length; i++){
      options.push(<option key={props.options[i]} value={props.options[i]}>{props.options[i]}</option>)
    }

    return options
  }
  return (
    <div className="InputBox">
      <label className='formCustomLabel' htmlFor={props.inputLabel}>
      {props.inputLabel}
      </label>
        {props.options && 
        
        props.options[0] == 'Select Sex' ? 
        <select ref={ref} id='Sex' onChange={props.changeHandler} className="formCustomSelect">
          {createOptions(props.options)}
        </select> 
        : 
        <select ref={ref} onChange={props.changeHandler} className="formCustomSelect">
          {createOptions(props.options)}
        </select>}
      {props.children}
      
      
    </div>
  );
})

export default InputBox;
