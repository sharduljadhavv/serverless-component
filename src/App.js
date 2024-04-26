import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [inputText, setInputText] = useState('');
  
  async function onSubmit(e){
    e.preventDefault();

    const {data}= await axios.get('your serverless componnet url',{
      params:{
        name:inputText
      }
    });
    console.log(data);

    alert(data);

  }
 
  return (
  <>
  <form onSubmit={onSubmit}>
    <input type="text" value={inputText} onChange={(e)=>setInputText(e.target.value)} placeholder='Name'/>
    <button type="submit">Submit</button>
  </form>
  </>
 )
}

export default App;
