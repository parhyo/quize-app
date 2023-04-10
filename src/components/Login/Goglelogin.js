import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import {auth,provider} from '../Signup/firebase';
import { signInWithPopup} from 'firebase/auth'
import { useNavigate } from 'react-router-dom';


function Goglelogin() {

  const [value, setValue] = useState("");
  const navigate=useNavigate()

    const handleSignIn =  () => {
      {
       signInWithPopup(auth,provider)
       .then((data)=>{
        setValue(data.user.email)
        // localStorage.setItem('email',data.user.email)
        alert("your account is login sucssesfully")
       })
      }
      navigate('/chatbox')
    }

    useEffect(()=>{
      
    })


  return (
    <div>
   {/* <Navbar bg="dark" variant="dark"> */}
       <Button variant="success"  onClick={handleSignIn} className="centre mt-1">
        Google
        </Button>
      
      {/* </Navbar> */}
      </div>
  )
}

export default Goglelogin
