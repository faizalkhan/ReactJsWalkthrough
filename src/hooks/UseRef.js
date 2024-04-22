import { useRef} from "react";
import React, { useContext } from 'react';


export const UseRefComp = () => {


  //const user = useContext(UserContext);



   const inputText = useRef(null);

   function handleFunc()
   {
    inputText.current.value = "Learning useref..."
    inputText.current.focus();
    inputText.current.style.color = "red"
   }


 return (<>
 

     <div> useref in username   </div>



      <input type="text" ref={inputText} />
      <button type='button' onClick={handleFunc} >  Submit </button>
<br/>

 </>)

}