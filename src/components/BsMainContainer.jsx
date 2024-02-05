import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import BsArticleCard from "./BsArticleCard";
import SiteData from "../data.js";
import BsLocationField from "./BsLocationField.jsx";

export default function BsMainContainer({ groupJoined }) {
  return (
    <>
      <Container>
        <Row>
          <Col xs={12} sm={12} md={8}>
            {SiteData.map((data, index) => {
              return (
                <>
                  <BsArticleCard
                    key={index}
                    count={index}
                    articleCategory={data.category}
                    articleTitle={data.title}
                    authorName={data.name}
                    type={data.type}
                  />
                </>
              );
            })}
          </Col>
          <Col xs={4} className="ps-5 d-none d-md-block">
            <BsLocationField group={groupJoined} />
          </Col>
        </Row>
      </Container>
    </>
  );
}
