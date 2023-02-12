import React from "react";

const Input = React.forwardRef((props, ref)  => {
    
    return (
        <input onChange={props.changeHandler} onKeyDown={(event) => {
            if (!/[0-9]/.test(event.key) && event.key !== 'Backspace' && event.key !== '.') {
              event.preventDefault();
            }
          }} ref={ref} className='formCustomInput' id={props.idForInputLabel} placeholder={props.placeholder} />    
    );
  })

  export default Input