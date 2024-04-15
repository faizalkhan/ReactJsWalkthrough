import react ,{ useContext } from "react";
import { UserContext } from "../App";

function ComponentE()
{
     const user = useContext(UserContext);

     return  <div> Username is {user}  </div>

}


export default ComponentE;