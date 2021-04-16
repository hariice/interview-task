import React, { useState } from "react";
import "./forms.scss";
import FormsItems from "./form-items";

const Forms = () => {
  // const [name, setName] = useState("");
  // const [pass, setPass] = useState("");
  // const [mail, setMail] = useState("");
  // const [message, setMessage] = useState("");

  const [entity, setEntity] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",

  })

  const setInput = (name, value) => {
    setEntity({ ...entity, [name]: value });
  }
// const[buttonClick, setButtonClick]=useState("")
  const click=()=>{
    console.log(entity);
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
      <FormsItems entity={entity} setInput={setInput} click={click}/>
    </>
  )
}


export default Forms;