import logo from './logo.svg';
import {useEffect, useState} from 'react'
import './App.css';
import  {MakeGetRequest} from './service'
import Display from './pages/display';
import { Component } from 'react';
function App() {
  const [arr,setArr]=useState([]);
  useEffect(() => {
    MakeGetRequest().then(result=>setArr(result))
  }, [])
  return(
    <div className="App">
    <Display data={arr}/>
    </div>
  );
}

export default App;
