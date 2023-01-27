import React from "react";
import "./SignUpForm.css";

function SignUpForm() {
  return (
    <div className="form">
      <div className="inputContainer">
        <h5>Sign Up</h5>
        <div className="mb-3">
          <p for="exampleFormControlInput1" className="form-p ">
            User Name
          </p>
          <input
            type="text"
            className="form-control input-sm "
            id="exampleFormControlInput1"
            required
          />
        </div>
        <div className="mb-3">
          <p for="exampleFormControlInput1" className="form-p">
            Email
          </p>
          <input
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
          <input
            type="password"
            className="form-control"
            id="exampleFormControlInput1"
          />
        </div>
        <div className="mb-3">
          <p for="exampleFormControlInput1" className="form-p">
            confirm password
          </p>
          <input
            type="password"
            className="form-control"
            id="exampleFormControlInput1"
          />
        </div>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
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
      <button type="button" class="btn btn-secondary">
        Submit
      </button>
    </div>
  );
}

export default SignUpForm;
