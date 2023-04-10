import {
  fetchSignInMethodsForEmail,
  signInWithPopup,
} from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { auth, fprovider } from "../Signup/firebase";

function Facebook() {

  const [user, setUser] = useState(null);
  const navigate=useNavigate()

  const facebookshow = () => {
    if (!auth || !fprovider) {
      console.log("Error: Authentication provider not configured correctly.");
      return;
    }

    signInWithPopup(auth, fprovider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        if (error.code === "auth/account-exists-with-different-credential") {
          const email = error.email;
          fetchSignInMethodsForEmail(auth, email)
            .then((providers) => {
              console.log(
                "You have already signed up with a different provider."
              );
              console.log(
                "Please sign in using one of the following providers:"
              );
              providers.forEach((provider) => {
                console.log(provider);
              });
            })
            .catch((error) => {
              console.log(error);
            });
        } else if (error.code === "auth/missing-identifier") {
          console.log(
            "Error: Missing identifier. Authentication provider not configured correctly."
          );
        } else {
          console.log(error);
        }
      });
      navigate('/chatbox')
    };
  

  return (
    <div>
      {/* <Navbar bg="dark" variant="dark"> */}
        <Button
          variant="primary"
          onClick={facebookshow}
          className="centre  mt-1"
        >
         Facebook
        </Button>
      {/* </Navbar> */}
    </div>
  );
}

export default Facebook;
