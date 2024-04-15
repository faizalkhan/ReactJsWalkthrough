import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Parent } from './parent/parent';
import { Form } from './hooks/UseState';
import { toast } from "react-toastify";
import { UseEffectAPI } from './hooks/UseEffect';
import { Card } from './card/card';
import CardResponse  from './json/card.json'
import { UseRefComp } from './hooks/UseRef';
import ComponentE from './hooks/UseContext';
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/home';
import About from './pages/about';
import Pagenotfound from './pages/pagenotfound';

// function App() {

//   return(


//      <div>

// <h1> Hello World </h1>

// <h1> Hello World </h1>

// <h1> Hello World </h1>

//      </div>

 

    
 

//   )
  
// }

// export default App;


export const UserContext = React.createContext();


const App = () => {
  

    return (
 
      <>   

       <UserContext.Provider value ={'Raja'}>

     <ComponentE />

     <UseRefComp />
   

      </UserContext.Provider>
        



       <h2> Hello World </h2> 
   
       <Parent /> 

       <Form />  

       <UseEffectAPI />
       

       {CardResponse.map((item, index) => {

            return <Card key={index} name={item.name} img = {item.img}></Card>

       } )}


       {/* <Card name="mobile"
        img ="https://tse3.mm.bing.net/th?id=OIP.vbHfsrK2IfWE1ZT9NMw5PgHaE7&pid=Api&P=0&h=180" /> */}
        
        
      




      <p> <Link to ="/"> Home </Link></p>

      <p> <Link to ="/aboutus"> About us </Link></p>
    
      <Routes>
       <Route path= "/" element={<Home/>}> </Route>
       <Route path= "/aboutus" element={<About />}> </Route>
      </Routes>            
    
     
      


      </>
    )
}







export default App;
