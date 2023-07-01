import { React, useState } from "react";
import ResetButton from "./ResetButton";
import MainModal from "./Modal.js"

const Form = () => {

  const [formValue, setFormValue] = useState('')

  const onReset = () => {
    setFormValue('')
  }

  const handleChange = (e) => {
    setFormValue(e.target.value)
    console.log(formValue)
  }
  
  return (
  
   <div>
       <form className="formData" type="text"  >
          <label className="labelText">Enter Your Name</label>
          <input type="text" className="inputText" onChange={handleChange}/>

      <div className="buttons">
        <MainModal className="MainModal" formValue={formValue}/>  
        <ResetButton onClick={() => onReset()}/>
        </div>
      </form>
   </div>

  )    
}

export default Form;