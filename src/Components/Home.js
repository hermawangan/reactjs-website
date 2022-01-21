import React from "react";
import { Outlet } from "react-router-dom";
import InformationWrap from "./InformationWrap";
import PlaceSection from "./PlaceSection";

function Home() {
  return (
    <div>
      <PlaceSection />
      <InformationWrap />
    </div>
  );
}

export default Home;
