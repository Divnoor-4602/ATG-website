import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import InputGroup from "react-bootstrap/InputGroup";
import logoImage from "../assets/whole.svg";
import searchImage from "../assets/baseline-search-24px.svg";
import dropDownArrow from "../assets/baseline-arrow_drop_down-24px.jpg";
import profileImg from "../assets/logged-profile-img.png";
import { useState } from "react";
import BsFormModal from "./BsFormModal";

export default function BsNavbar({}) {
  const [modalShow, setModalShow] = useState(false);
  const [usernameCreated, setUsernameCreated] = useState("");

  function handleUsernameCreated(fname, lname) {
    setUsernameCreated(`${fname.current.value} ${lname.current.value}`);
  }

  return (
    <>
      <Navbar
        className="bg-white justify-content-between pb-2 d-none d-md-block"
        sticky="top"
      >
        <Container>
          <Col>
            <Navbar.Brand>
              <img src={logoImage} alt="logo-image" className="mb-1" />
            </Navbar.Brand>
          </Col>
          <Col className="d-xs-none d-sm-none d-md-block">
            <InputGroup className="rounded-pill">
              <InputGroup.Text id="basic-addon-1">
                <img src={searchImage} alt="search-symbol" />
              </InputGroup.Text>
              <Form.Control
                placeholder="Search for your favourite group in ATG"
                aria-label="groups"
                aria-describedby="basic-addon1"
                size="sm"
              />
            </InputGroup>
          </Col>
          {usernameCreated === "" ? (
            <Col
              className="text-end fw-semibold fs-6 create-account"
              onClick={() => setModalShow(true)}
            >
              Create account.
              <span className="text-primary">
                It's free!
                <img
                  src={dropDownArrow}
                  alt="drop down arrow"
                  className="mb-1"
                />
              </span>
            </Col>
          ) : (
            <>
              <Col className="text-end fw-semibold fs-6 create-account">
                <img src={profileImg} alt="profile-img" className="pe-2" />
                <span className="text-dark">
                  {usernameCreated}
                  <img
                    src={dropDownArrow}
                    alt="drop down arrow"
                    className="mb-1"
                  />
                </span>
              </Col>
            </>
          )}
        </Container>
      </Navbar>
      <BsFormModal
        onHide={() => setModalShow(false)}
        show={modalShow}
        usernameToShow={usernameCreated}
        usernameCreation={handleUsernameCreated}
      />
    </>
  );
}
