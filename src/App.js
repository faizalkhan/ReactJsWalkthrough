import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Parent } from './parent/parent';
import { Form } from './hooks/UseState';
import { toast } from "react-toastify";

import { Card } from './card/card';
import CardResponse  from './json/card.json'
import { UseRefComp } from './hooks/UseRef';
import ComponentE from './hooks/UseContext';
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/home';
import About from './pages/about';
import Pagenotfound from './pages/pagenotfound';

import { useEffect } from 'react';
import { UseEffectAPI } from './hooks/useeffect-hook/useEffect';







const App = () => {


  useEffect(() => {
   console.log("App use effect");
  
    fetch('/').then((response) => console.log(CardResponse));
   });
  

    return (
 
      <>   

    

<UseEffectAPI/>
       

    

      </>
    )
}







export default App;
