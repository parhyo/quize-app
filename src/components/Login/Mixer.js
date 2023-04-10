import React, { useState } from "react";
import Facebook from "./Facebook";
import Goglelogin from "./Goglelogin";
import { LoginSocialFacebook } from "reactjs-social-login";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import "./Login.css";
import { app } from "../Signup/firebase";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Login from "./Login";

const auth = getAuth(app);

function Mixer() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signupUser = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((value) => alert("succsess"))
      .catch(navigate("/chatbox"));
  };

  return (
    <>
      {/* <h1 className='heading'>Hello friends</h1> */}
      <div className="main">
        <div className="heading_oo">
          <div className="imge_div">
            <img
              className="imge"
              src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
            ></img>
          </div>
          <div>
            <h3>Hello</h3>
          </div>
          <div>
            <h1>world...</h1>
          </div>
          <div>
            <h6>Entere To Your Dream World it's Google-lite </h6>
          </div>
        </div>
        <div className="login_page">
          <h5> Register</h5>
          <Form>
          <Form.Text>
              Alerady Have Account? Please Here <Login />
            </Form.Text>
            <div class="form__group field">
              <input
                type="input"
                class="form__field"
                placeholder="Name"
                name="name"
                id="name"
                required
              />
            </div>

            <div class="form__group field">
              <input
                type="email"
                class="form__field"
                placeholder="email"
                name="email"
                id="email"
                required
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>

            <div class="form__group field">
              <input
                type="password"
                class="form__field"
                placeholder="password"
                name="password"
                id="password"
                required
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>

            <div class="form__group field">
              <input
                type="number"
                class="form__field"
                placeholder="number"
                name="number"
                id="number"
                required
              />
            </div>
  <input type="radio" id="age1" name="age" value="30"/>
  <label for="age1"> Accept Terms&Conditions </label><br/><br/>

            <Button variant="danger" type="submit" onClick={signupUser}>
             Submit
            </Button>
          </Form>

          <p> Signup With Social Media</p>
          <div className="button_div">
            {/* <Signup/> */}
            <Goglelogin />
            <LoginSocialFacebook>
              <Facebook />
            </LoginSocialFacebook>
          </div>
        </div>
      </div>
    </>
  );
}

export default Mixer;
