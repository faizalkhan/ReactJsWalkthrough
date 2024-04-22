import { useEffect, useState } from "react";

export const UseEffectAPI = () => {


    //const [userInfo, setUserInfo] = useState("");

   //   async function CallingGetAPi()
   //   {
   //      let response = await fetch("https://dummyjson.com/products/1");
   //      let user = await response.json();
   //      console.log("user", user); 
        
   //      setUserInfo(user);

   //   }


    const [count, setCount]= useState(0);
    const [text,  setText]= useState('');


   const incrementCount = () => {
    setCount(count + 1);
   }

   const handleChange =(e) => {
    
     setText(e.target.value);

   }

// component mouting & component updating

    //  useEffect(() => {
    //   //CallingGetAPi();

    //  console.log("use effect");
    //  document.title = `button clicked for ${count}`;

    //  });

    // component mouting

     useEffect(() => {
      //CallingGetAPi();

     console.log("use effect");
     document.title = `button clicked for ${count}`;

     }, []);

    return(<>
        
        <h1> This is my count Value : {count}</h1>

        <input type="text" onChange={handleChange} />

        <h2>{text} </h2>

        <button onClick={incrementCount}>Increament</button>
        
     </>)

}


