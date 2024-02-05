import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import React from "react";
import locationIcon from "../assets/location-icon.svg";
import pencilIcon from "../assets/pencil-icon.svg";
import errorIcon from "../assets/error.svg";
import thumbIcon from "../assets/thumb-page.svg";
import groupOnePhoto from "../assets/group-1.svg";
import groupTwoPhoto from "../assets/group-2.svg";
import groupThreePhoto from "../assets/group-3.svg";
import groupFourPhoto from "../assets/group-4.svg";

export default function BsLocationField({ group }) {
  return (
    <>
      <Row className="mt-5 mx-0 location-row pb-3">
        <Col xs={10} className="ps-0">
          <img
            src={locationIcon}
            alt="location icon image"
            className="pb-1 pe-1"
          />
          <span>Noida, India</span>
        </Col>
        <Col className="pe-0 d-flex justify-content-end">
          <img src={pencilIcon} alt="pencil icon image" className="pb-1"></img>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col xs={1} className="pe-0 ">
          <img src={errorIcon} className="mb-1" />
        </Col>
        <Col className="ps-1">
          <p className="text-black-50 loc-text">
            Your location will help us serve better and extend a personalised
            experience.
          </p>
        </Col>
      </Row>
      {group && (
        <>
          <Row className="mt-4">
            <div className="d-flex justify-content-center">
              <img src={thumbIcon} alt="thumb-icon" className="mb-1 pe-2" />
              <span className="fw-light">RECOMMENDED GROUPS</span>
            </div>
            <div className="mt-4 d-flex justify-content-between">
              <div>
                <img src={groupOnePhoto} alt="group-photo" className="pe-3" />
                <span className="fw-light">Leisure</span>
              </div>
              <div>
                <Button variant="light fw-light rounded-pill px-3">
                  Follow
                </Button>
              </div>
            </div>
            <div className="mt-4 d-flex justify-content-between">
              <div>
                <img src={groupTwoPhoto} alt="group-photo" className="pe-3" />
                <span className="fw-light">Activism</span>
              </div>
              <div>
                <Button variant="light fw-light rounded-pill px-3">
                  Follow
                </Button>
              </div>
            </div>
            <div className="mt-4 d-flex justify-content-between">
              <div>
                <img src={groupThreePhoto} alt="group-photo" className="pe-3" />
                <span className="fw-light">MBA</span>
              </div>
              <div>
                <Button variant="light fw-light rounded-pill px-3">
                  Follow
                </Button>
              </div>
            </div>
            <div className="mt-4 d-flex justify-content-between">
              <div>
                <img src={groupFourPhoto} alt="group-photo" className="pe-3" />
                <span className="fw-light">Philosophy</span>
              </div>
              <div>
                <Button variant="light fw-light rounded-pill px-3">
                  Follow
                </Button>
              </div>
            </div>
          </Row>
          <div
            className="text-primary mt-5 d-flex justify-content-end"
            style={{ cursor: "pointer", fontSize: "0.8rem" }}
          >
            See more...
          </div>
        </>
      )}
    </>
  );
}
