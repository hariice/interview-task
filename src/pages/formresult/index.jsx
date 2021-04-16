import React, { useState } from "react";
import "./forms.scss";


const Forms = () => {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");

  const [entity, setEntity] = useState = {
    name: "",
    email: "",
    phone: "",
    password: "",

  }

  const setInput = (name, value) => {
    setEntity({ ...entity, [name]: value });
  }


  // const handle=(event)=>{

  //   console.log(event.target.value);
  //   setName(event.target.value);

  // }
  // const password=(event)=>{
  //   console.log(event.target.value);
  //   setPass(event.target.value);
  // }
  // const email=(event)=>{
  //   console.log(event.target.value);
  //   setMail(event.target.value);
  // }
  // const msg=(event)=>{
  //   console.log(event.target.value);
  //   setMessage(event.target.value);
  // }
  return (
    <>
      <form>
        <ul className="form-style-1">
          <li><label>Full Name <span className="required">*</span></label>
          <input type="text" onChange={(e) => {
            setInput("name", e.target.value);
          }} name="field1" className="field-divided" placeholder="First" /> </li>
          <li>
            <label>password <span className="required">*</span></label>
            <input type="password" onChange={password} name="field3" className="field-long" />

          </li>
          <li>
            <label>Email <span className="required">*</span></label>

            <input type="email" onChange={email} name="field3" className="field-long" />

          </li>
          <li>
            <label>Your Message <span className="required">*</span></label>
            <textarea name="field5" onChange={msg} id="field5" className="field-long field-textarea"></textarea>
          </li>
          <li>
            <input type="submit" value="Submit" />
          </li>
        </ul>
      </form>
      <div className="result">
        <p>{name}</p>
        <p>{pass}</p>
        <p>{mail}</p>
        <p>{message}</p>



      </div>

    </>
  )
}


export default Forms;