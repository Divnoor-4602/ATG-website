import React, { useState } from "react";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import mainImage from "../assets/Rectangle 2.svg";
import backArrowImage from "../assets/back-arrow.svg";
import BsFormModal from "./BsFormModal";

export default function BsMainImage() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <div className="gradient-container">
        <div className="gradient"></div>
        <img src={backArrowImage} className="back-arrow d-block d-md-none" />
        <Button
          className="comp-group-button d-block d-md-none"
          variant="outline-light"
          onClick={() => setModalShow(true)}
        >
          Join Group
        </Button>
        <BsFormModal onHide={() => setModalShow(false)} show={modalShow} />
        <h2 className="computer-eng-title text-white ms-5">
          Computer Engineering
        </h2>
        <p className="computer-eng-desc ms-5">
          142,765 Computer Engineers follow this
        </p>
        <Image
          fluid
          src={mainImage}
          alt="main-computer-image"
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
        />
      </div>
    </>
  );
}
