import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import shareIcon from "../assets/baseline-share-24px.svg";
import dotIcon from "../assets/baseline-more_vert-24px.svg";
import visibilityEye from "../assets/visibility_24px.svg";
import cardOneImage from "../assets/article-1.png";
import cardTwoImage from "../assets/article-2.png";
import cardThreeImage from "../assets/article-3.png";
import profileOneImage from "../assets/Rectangle 3.svg";
import profileTwoImage from "../assets/profile-2.svg";
import profileThreeImage from "../assets/profile-3.svg";
import profileFourImage from "../assets/profile-4.svg";
import locationIcon from "../assets/location-icon.svg";
import calendarIcon from "../assets/Calendar-icon.svg";
import React from "react";

const Images = [cardOneImage, cardTwoImage, cardThreeImage];
const profileImages = [
  profileOneImage,
  profileTwoImage,
  profileThreeImage,
  profileFourImage,
];

export default function BsArticleCard({
  count,
  articleCategory,
  articleTitle,
  authorName,
  type,
}) {
  let midCardBody;
  if (type == "") {
    midCardBody = (
      <Card.Text className="text-black-50">
        I've worked in UX for the better part of a decade. From now on. I plan
        to rei...
      </Card.Text>
    );
  } else if (type === "meetup") {
    midCardBody = (
      <>
        <Card.Subtitle className="py-3">
          <Row>
            <Col xs={3}>
              <div>
                <img src={calendarIcon} alt="calendar-icon" className="pe-2" />
                <span className="date-text">Fri, 12 Oct, 2018</span>
              </div>
            </Col>
            <Col xs={5}>
              <div>
                <img src={locationIcon} alt="calendar-icon" className="pe-2" />
                <span className="date-text">Ahmedabad, India</span>
              </div>
            </Col>
          </Row>
        </Card.Subtitle>
        <button className="btn btn-outline-danger w-100 mt-2 mb-4">
          Visit Website
        </button>
      </>
    );
  } else if (type === "job") {
    midCardBody = (
      <>
        <Card.Subtitle className="py-3">
          <Row>
            <Col xs={6}>
              <div>
                <img src={calendarIcon} alt="calendar-icon" className="pe-2" />
                <span className="date-text">
                  Innovator Analytics Private ltd.
                </span>
              </div>
            </Col>
            <Col xs={5}>
              <div>
                <img src={locationIcon} alt="calendar-icon" className="pe-2" />
                <span className="date-text">Noida, India</span>
              </div>
            </Col>
          </Row>
        </Card.Subtitle>
        <button className="btn btn-outline-secondary w-100 mt-2 mb-4">
          Apply on Timesjob
        </button>
      </>
    );
  }
  return (
    <>
      <Card style={{ width: "100%" }} className="mt-3">
        <Card.Img variant="top" src={count <= 3 ? Images[count] : null} />
        <Card.Body>
          <Card.Text className="fw-semibold">{articleCategory}</Card.Text>
          <Row>
            <Col xs={10}>
              <Card.Title>{articleTitle}</Card.Title>
            </Col>
            <Col>
              <Button variant="white">
                <img src={dotIcon} />
              </Button>
            </Col>
          </Row>

          {midCardBody}

          <Container className="p-0 justify-content-center">
            <Row>
              <Col xs={7}>
                <img src={profileImages[count]} className="pe-3" />
                <span className="fw-semibold">{authorName}</span>
              </Col>
              <Col>
                <div className="mt-2">
                  <img src={visibilityEye} className="pe-2" />
                  <span className="fs-6">1.4k views</span>
                </div>
              </Col>
              <Col xs={2}>
                <Button variant="light">
                  <img src={shareIcon} />
                </Button>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </>
  );
}
