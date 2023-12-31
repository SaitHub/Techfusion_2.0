import React from 'react'
import classes from './Input.module.css'
const Input = (props) => {
  return (
    <input className={`${classes.ip} ${(props.properties.type==="file")?classes.fip:""}`} {...props.properties}/>
  )
}

export default Input