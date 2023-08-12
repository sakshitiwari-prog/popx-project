import React, { useRef } from 'react'
import { useEffect } from 'react'
import  '../style/button.css'
function Button(props:any) {
  
  return (
   <a href={props.to}>
    <button id='btn' style={{color:`${props.color}` ,background:`${props.bgcolor}`}} >{props.label}</button>
 
   </a>  )
}

export default Button