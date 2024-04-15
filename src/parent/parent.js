import { Child } from "./child";

export const Parent = () =>
{

    const firstname = "Ravi";
    const lastname = "Raja";

    return <>
    
       <h1> parent component </h1>

       <Child firstname = {firstname}
        
        lastname = {lastname}
       
       />
    
    </>

}