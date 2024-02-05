import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import BsFormSignIn from "./BsFormSignIn";
import formRighImage from "../assets/form-image.svg";

import React, { useState } from "react";
import { InputGroup, ModalBody } from "react-bootstrap";

export default function BsFormModal(props) {
  const [accountExists, setAccountExists] = useState(true);

  function handleAccountExists() {
    setAccountExists((prevValue) => !prevValue);
  }

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="rounded-3"
      >
        <ModalBody className="p-0 pb-5">
          <Container className="px-0">
            {/* take the form component under here and export it as a seperate component */}
            <p className="text-center text-success form-head p-3 d-none d-md-block">
              Let's learn, share & inspire each other with our passion for
              computer engineering. Sign up now 🤘🏼
            </p>
            <Row className="mt-4">
              <Col className="px-5">
                <div>
                  <h2 className="fw-bold ">
                    {accountExists ? "Create Account" : "Sign in"}
                  </h2>
                </div>
                <BsFormSignIn
                  signInOrLogin={accountExists}
                  hanUsernameCreation={props.usernameCreation}
                  onHide={props.onHide}
                />
              </Col>
              <Col className="d-none d-lg-block">
                <div className="text-end pe-5 sign-in-text">
                  {accountExists ? (
                    <>
                      Already have an account?
                      <span
                        className="text-primary ps-1"
                        style={{ cursor: "pointer" }}
                        onClick={handleAccountExists}
                      >
                        Sign In
                      </span>
                    </>
                  ) : (
                    <>
                      Don’t have an account yet?
                      <span
                        className="text-primary ps-1"
                        style={{ cursor: "pointer" }}
                        onClick={handleAccountExists}
                      >
                        Create new for free!
                      </span>
                    </>
                  )}
                </div>

                <img
                  src={formRighImage}
                  alt="form illustration"
                  className="mt-5 mb-3 fluid"
                />
                <div className="text-black-50 term-text text-center">
                  By signing up, you agree to our Terms & conditions, Privacy
                  policy
                </div>
              </Col>
            </Row>
          </Container>
        </ModalBody>
      </Modal>
    </>
  );
}
