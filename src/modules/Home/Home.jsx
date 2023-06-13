import React from "react";
import Categories from "./Categories/Categories";
import SellingPoint from "./SellingPoint/SellingPoint";
import Testimonials from "./Testimonials/Testimonials";

function Home() {
  return (
    <>
      <SellingPoint />
      <Testimonials />
      <Categories />
    </>
  );
}

export default Home;
