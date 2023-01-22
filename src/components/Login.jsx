import React, { useState } from 'react'
import 'react-phone-number-input/style.css'
import "./login.css"
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

function Login() {
  
  const [value, setValue] = useState()
  return (
    <div>
    <PhoneInput id="countryInput"
      placeholder="Enter phone number"
      value={value}
      onChange={setValue}/>
      </div>
  )
}

export default Login