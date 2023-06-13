<<<<<<< HEAD
import React from 'react';
import Categories from "./Categories/Categories";
import SellingPoint from "./SellingPoint/SellingPoint";
import Testimonials from "./Testimonials/Testimonials";

function Home() {
    return (
        <>
            <SellingPoint />
            <Testimonials/>
            <Categories />
        </>
    );
=======
import React from "react";
import Banner from "../Banner/Banner";
import TrustedBy from "../TrustedBy/TrustedBy";
import Services from "../Services/Services";

function Home() {
  return (
    <div>
      <Banner />
      <TrustedBy />
      <Services />
    </div>
  );
>>>>>>> quyen-branch
}

export default Home;
