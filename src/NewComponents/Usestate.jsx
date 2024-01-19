import React,{useState} from 'react'
import './Usestate.css'


function Usestate() {
    const[number,setNumber]=useState(1)
    const clickOn=()=>{
        setNumber(number*2)
    }
  return (
    <div>
        <h1>changing Numbers : {number} </h1>
        <button className='button' onClick={clickOn}>Click here to change number</button>
    </div>
  )
}

export default Usestate