import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import visibilityIcon from "../assets/visibility-icons.svg";
import facebookLogo from "../assets/facebook-logo.svg";
import googleLogo from "../assets/google-search.svg";
import React, { useRef } from "react";

export default function BsFormSignIn({
  signInOrLogin,
  hanUsernameCreation,
  onHide,
}) {
  const fname = useRef();
  const lname = useRef();
  return (
    <>
      <div className="mt-4">
        {signInOrLogin ? (
          <>
            <InputGroup>
              <Form.Control
                style={{ borderRadius: " 0rem 0rem 0.125rem 0.125rem" }}
                className="form-inputs"
                aria-label="First Name"
                placeholder="First Name"
                ref={fname}
              ></Form.Control>
              <Form.Control
                style={{ borderRadius: " 0rem 0rem 0.125rem 0.125rem" }}
                className="form-inputs"
                aria-label="Last Name"
                placeholder="Last Name"
                ref={lname}
              ></Form.Control>
            </InputGroup>
            <Form.Control
              style={{ borderRadius: " 0rem 0rem 0.125rem 0.125rem" }}
              className="form-inputs"
              aria-label="Email"
              placeholder="Email"
            ></Form.Control>
            <InputGroup>
              <Form.Control
                style={{ borderRadius: " 0rem 0rem 0.125rem 0.125rem" }}
                className="form-inputs"
                placeholder="Password"
                aria-label="Passsword"
                aria-describedby="basic-addon1"
              />
              <InputGroup.Text
                id="basic-addon1"
                style={{ borderRadius: " 0rem 0rem 0.125rem 0.125rem" }}
              >
                <img src={visibilityIcon} alt="visibility-icon" />
              </InputGroup.Text>
            </InputGroup>
            <Form.Control
              className="form-inputs"
              aria-label="Confirm Password"
              placeholder="Confirm Password"
              style={{
                borderBottom: "1px solid #D9D9DB",
                borderRadius: " 0rem 0rem 0.125rem 0.125rem",
              }}
            ></Form.Control>
            <Button
              variant="primary"
              className="rounded-pill my-4"
              style={{ width: "100%" }}
              onClick={() => {
                hanUsernameCreation(fname, lname);
                onHide();
              }}
            >
              Create Account
            </Button>
            <Button
              variant="outline-dark"
              style={{ width: "100%" }}
              className="form-oauth-button rounded "
            >
              <img
                src={facebookLogo}
                alt="facebook logo"
                className="mb-1 me-2"
              />
              <span>Sign up with facebook</span>
            </Button>
            <Button
              variant="outline-dark"
              style={{ width: "100%" }}
              className="form-oauth-button rounded mt-3"
            >
              <img src={googleLogo} alt="google logo" className="mb-1 me-2" />
              <span>Sign up with facebook</span>
            </Button>
          </>
        ) : (
          <>
            <Form.Control
              style={{ borderRadius: " 0rem 0rem 0.125rem 0.125rem" }}
              className="form-inputs"
              aria-label="Email"
              placeholder="Email"
            ></Form.Control>
            <InputGroup>
              <Form.Control
                style={{ borderRadius: " 0rem 0rem 0.125rem 0.125rem" }}
                className="form-inputs"
                placeholder="Password"
                aria-label="Passsword"
                aria-describedby="basic-addon1"
              />
              <InputGroup.Text
                id="basic-addon1"
                style={{ borderRadius: " 0rem 0rem 0.125rem 0.125rem" }}
              >
                <img src={visibilityIcon} alt="visibility-icon" />
              </InputGroup.Text>
            </InputGroup>
            <Button
              variant="primary"
              className="rounded-pill my-4"
              style={{ width: "100%" }}
              onClick={() => {
                hanUsernameCreation(fname, lname);
              }}
            >
              Sign in
            </Button>
            <Button
              variant="outline-dark"
              style={{ width: "100%" }}
              className="form-oauth-button rounded "
            >
              <img
                src={facebookLogo}
                alt="facebook logo"
                className="mb-1 me-2"
              />
              <span>Sign up with facebook</span>
            </Button>
            <Button
              variant="outline-dark"
              style={{ width: "100%" }}
              className="form-oauth-button rounded mt-3"
            >
              <img src={googleLogo} alt="google logo" className="mb-1 me-2" />
              <span>Sign up with facebook</span>
            </Button>
          </>
        )}
      </div>
    </>
  );
}
