import { useEffect, useState } from "react";

export const UseEffectAPI = () => {


    const [userInfo, setUserInfo] = useState("");

   //   async function CallingGetAPi()
   //   {
   //      let response = await fetch("https://dummyjson.com/products/1");
   //      let user = await response.json();
   //      console.log("user", user); 
        
   //      setUserInfo(user);

   //   }


     useEffect(() => {
      //CallingGetAPi();

     console.log("use effect");
     });

    return(<>
        
        
        
     </>)

}