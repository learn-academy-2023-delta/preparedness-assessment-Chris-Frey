import { React } from "react";
import './App.css'
import MainModal from "./Components/Modal.js";
import Form from "./Components/Form.js";
// import ResetButton from "./Components/ResetButton.js";


const App = () => {

  return (
  <>
    <div className="title">
      <p>Preparedness Assessment</p>
    </div>
  
    <div>
      <Form />
    </div>
    
  </>
  )
}

export default App;