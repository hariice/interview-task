import React, { useState } from "react";
import "./forms.scss";


const FormsItems = (props) => {

    return (
        <>
            <form>
                <ul className="form-style-1">
                    <li><label>Full Name <span className="required">*</span></label>
                        <input type="text" value={props.entity?.name} onChange={(e) => {
                            props.setInput("name", e.target.value);
                        }} name="field1" className="field-divided" placeholder="First" /> </li>


                    <li>
                        <label>phone <span className="required">*</span></label>

                        <input type="number" value={props.entity?.phone} onChange={(e) => {
                            props.setInput("phone", e.target.value);
                        }} name="field3" className="field-long" />

                    </li>
                    <li>
                        <label>Email <span className="required">*</span></label>

                        <input type="email" value={props.entity?.email} onChange={(e) => {
                           props.setInput("email", e.target.value);
                        }} name="field3" className="field-long" />

                    </li>
                    <li>
                        <label>password <span className="required">*</span></label>
                        <input type="password" value={props.entity?.password}
                        onChange={(e) => {
                            props.setInput("password", e.target.value);
                        }} name="field3" className="field-long" />

                    </li>
                    <li>
                        <button onClick={(e) => {
                            e.preventDefault();
                            
                            props.click();
                        }} >Submit</button>
                    </li>
                </ul>
            </form>
            {/* <div className="result">
        <p>{entity.name}</p>
        <p>{entity.phone}</p>
        <p>{entity.email}</p>
        <p>{entity.password}</p>



      </div> */}

        </>
    )
}


export default FormsItems;