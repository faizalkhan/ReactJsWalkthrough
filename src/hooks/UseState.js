import React, { useState } from "react";
import "../hooks/form.css"
import { phoneValidation } from "./utils";

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export const Form = () => {
  //var  i= 0;

  //const fullName = "";

  const [fullName, setFullName] = useState("");


  const [selectBox, setSelectBox] = useState("");


  const [checkBox, setCheckBox] = useState(false);





//   const handleCheckBoxChange = (e) => {
//     setCheckBox(e.target.checked)
//   }

//   console.log("fullname", fullName);

//   console.log("fullname", selectBox);


  const applycss = {

    backgroundColor: "red",
    width: "200px",
    height: "200px",
    marginLeft: "10px",

  }


  const [number, setNumber] = useState("");

  function handleFunc() 
  {

  let phoneValidations = phoneValidation(number)

  debugger;
    if(!phoneValidations)
    {

        toast.error("please enter valid phone number");
        return;
    }

console.log("phoneValidations", phoneValidations)
  }


  


  return (
    
    <>
 
   
     

   <div className="wrapper">
   


<label> Mobile Number </label>

<br/>     <br/>

     <input
        type="number"
        value={number}
        onChange={(e) =>setNumber(e.target.value)}
      /> 
    <br/>    <br/>


 <button type="button" onClick={ () => handleFunc() } > Submit  </button>

 <ToastContainer />
 <br/>    <br/>

      <select value ={ selectBox}  onChange={(e) => setSelectBox(e.target.value)}>
        <option value={""}> Choose Option </option>
        <option value={"ec"}> EC Branch </option>
        <option value={"cs"}>cs branch</option>
        <option value={"mech"}>mech branch</option>
        <option value={"civil"}>civil branch</option>
      </select>


      <input
        type="checkbox"
        checked={checkBox}
        onChange={(e) => setCheckBox(!checkBox)}

        //onChange= //handleCheckBoxChange
      />



   </div>
    



    </>
  );
}
