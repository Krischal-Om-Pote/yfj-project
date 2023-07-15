import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar'
import SignupComponent from '../Components/SignupComponent'

const Signup = () => {
  useEffect(()=>{
    window.scrollTo({
      top: 0,
    });
  },[]);
  return (
    <div>
        <Navbar/>
        <SignupComponent/>
    </div>
  )
}

export default Signup