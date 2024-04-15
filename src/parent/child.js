
export const Child = (props) =>
{
    console.log({props})

    return <>
    
       <h1> Child component </h1>

  

       {props.firstname}
       {props.lastname}
    
    </>

}