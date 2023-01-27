import React from "react";
import "./SignUpForm.css";
import { useState } from "react";

function SignUpForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setcPassword] = useState("");
  const [check, setCheck] = useState(false);

  return (
    <form className="form needs-validation" novalidate>
      <div className="inputContainer">
        <h5>Sign Up</h5>
        <div className="mb-3">
          <p for="exampleFormControlInput1" className="form-p ">
            User Name
          </p>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            id="validationCustom03"
            className="form-control"
            required
          />
          <div class="invalid-feedback">Please provide a valid city.</div>
        </div>
        <div className="mb-3">
          <p for="exampleFormControlInput1" className="form-p">
            Email
          </p>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
          />
        </div>
        <div className="mb-3">
          <p for="exampleFormControlInput1" className="form-p">
            Password
          </p>
          <span>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              type="password"
              className="form-control"
              id="exampleFormControlInput1"
            />

            {/* <span class="input-group-text togglePassword" id="">
            <i data-feather="eye" style="cursor: pointer"></i>
          </span> */}
          </span>
        </div>
        <div className="mb-3">
          <p for="exampleFormControlInput1" className="form-p">
            confirm password
          </p>
          <input
            value={cPassword}
            onChange={(e) => setcPassword(e.target.value)}
            required
            type="password"
            className="form-control"
            id="exampleFormControlInput1"
          />
        </div>
      </div>
      <div class="form-check">
        <input
          required
          value={check}
          class="form-check-input"
          type="checkbox"
          onChange={(e) => setCheck(true)}
          id="flexCheckDefault"
        />
        <p class="form-check-p" for="flexCheckDefault">
          I agree to{" "}
          <a href="#" class="link-primary">
            Terms of service
          </a>{" "}
          and{" "}
          <a href="#" class="link-primary">
            Privacy Policy
          </a>
        </p>
      </div>
      <button
        type="submit"
        disabled={!(name && email && password && cPassword && check)}
        class="btn btn-primary
        "
      >
        Submit
      </button>
    </form>
  );
}

export default SignUpForm;
