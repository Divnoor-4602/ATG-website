import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import { Navbar, Nav, Button, Col, Row } from "react-bootstrap";
import dropDownArrow from "../assets/drop-down-arrow.svg";
import groupJoinIcon from "../assets/group-icon.svg";
import exitIcon from "../assets/exit-group-icon.svg";

export default function BsPageNavbar({ onGroupJoin, groupJoined }) {
  return (
    <>
      <div className="d-flex d-md-none mt-3 mb-1 justify-content-evenly">
        <div className="fw-bold mt-2">Posts(368)</div>

        <div>
          <Button variant="light" className="mb-2">
            <span className="rounded-2 px-2">Filter: All</span>
            <img src={dropDownArrow} />
          </Button>
        </div>
      </div>

      <Navbar
        bg="white"
        data-bs-theme="light"
        className="mt-3 d-none d-md-block"
      >
        <Container className="page-link-navbar">
          <Col sm={3} md={8}>
            <Nav className="me-auto fw-normal">
              <Nav.Link href="#home" active className="pe-3 all-posts">
                All Posts(32)
              </Nav.Link>
              <Nav.Link href="#article" className="pe-3 d-sm-none d-md-block">
                Article
              </Nav.Link>
              <Nav.Link href="#event" className="pe-3 d-sm-none d-md-block">
                Event
              </Nav.Link>
              <Nav.Link href="#education" className="pe-3 d-sm-none d-md-block">
                Education
              </Nav.Link>
              <Nav.Link href="#job" className="pe-3 d-sm-none d-md-block">
                Job
              </Nav.Link>
            </Nav>
          </Col>
          <Col sm={9} md={8}>
            <Button variant="light" className="ms-5" size="sm">
              <span className="fw-semibold">Write a Post</span>
              <img src={dropDownArrow} className="mb-1 ps-2" />
            </Button>
            {groupJoined ? (
              <>
                <Button variant="outline-secondary" className="ms-3" size="sm">
                  <img src={exitIcon} className="mb-1 pe-2" />
                  <span className="white" onClick={onGroupJoin}>
                    <span className="mt-1">Leave Group</span>
                  </span>
                </Button>
              </>
            ) : (
              <>
                <Button variant="primary" className="ms-3" size="sm">
                  <img src={groupJoinIcon} className="mb-1 pe-2" />
                  <span className="white" onClick={onGroupJoin}>
                    <span className="mt-1">Join Group</span>
                  </span>
                </Button>
              </>
            )}
          </Col>
        </Container>
      </Navbar>
    </>
  );
}
