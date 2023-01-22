import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Earn from './Earn'
import Instagram from './Instagram'
import Login from './Login'
import Otp from './Otp'
import Post from './Post'
import Shop from './Shop'
import SignUp from './SignUp'
import Social from './Social'
import SuccessPage from './SuccessPage'
import Welcome from './Welcome'

function Mainroutes() {
  return (
    <Routes>
<Route path="/" element={<SignUp/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/otp" element={<Otp/>}/>
<Route path="/welcome" element={<Welcome/>}/>
<Route path="/post" element={<Post/>}/>
<Route path="/shop" element={<Shop/>}/>
<Route path="/earn" element={<Earn/>}/>
<Route path="/social" element={<Social/>}/>
<Route path="/instagram" element={<Instagram/>}/>
<Route path="/success" element={<SuccessPage/>}/>
    </Routes>
  )

}

export default Mainroutes