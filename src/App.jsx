import React, { useState } from "react";
import BsNavbar from "./components/BsNavbar";
import BsMainImage from "./components/BsMainImage";
import BsPageNavbar from "./components/BsPageNavbar";

import "bootstrap/dist/css/bootstrap.min.css";
import BsMainContainer from "./components/BsMainContainer";

export default function App() {
  const [groupJoined, setGroupJoined] = useState(false);

  function handleGroupJoin() {
    setGroupJoined((prevValue) => !prevValue);
  }

  return (
    <>
      <BsNavbar />
      <BsMainImage />
      <BsPageNavbar onGroupJoin={handleGroupJoin} groupJoined={groupJoined} />
      <BsMainContainer groupJoined={groupJoined} />
    </>
  );
}
