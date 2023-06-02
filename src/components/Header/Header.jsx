import React, { useEffect, useState } from "react";
import MainHeader from "./MainHeader/MainHeader";
import SubHeader from "./SubHeader/SubHeader";
import styles from "./Header.module.scss";

function Header() {
  const [y, setY] = useState(0);
  const condition = y > 150;
  console.log(condition);

  const handleScroll = () => {
    // const scrollTop = window.pageYOffset;
    const scrollY = window.scrollY;
    setY(scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <MainHeader />
      {condition && <SubHeader />}
    </>
  );
}

export default Header;
