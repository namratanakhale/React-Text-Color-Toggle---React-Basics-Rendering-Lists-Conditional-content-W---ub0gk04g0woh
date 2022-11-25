import React, {useEffect, useState} from 'react'
import '../styles/App.css';

const App = () => {
//code here 

const[style, setStyle] = useState(true)
const[name, setName] = useState("redColor")
function toggle(){
  setStyle(!style)
}
useEffect(()=>{
  if(style){
    setName("redColor")
  }else{
    setName("blueColor")
  }
},[style])
  return (
    <div id="main">
      <p className={name} >Newton School</p>
      <button id='button' onClick={toggle}>Change Style</button>
    </div>
  )
}


export default App;
