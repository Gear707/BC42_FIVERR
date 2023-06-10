import React, { useEffect, useState } from "react";
import MainHeader from "./MainHeader/MainHeader";
import SubHeader from "./SubHeader/SubHeader";
import styles from "./Header.module.scss";
import { useLocation } from "react-router-dom";
import useWindowResize from "../../helpers/useWindowResize";

function Header() {
  const [y, setY] = useState(0);

  const size = useWindowResize();
  const location = useLocation();
  const pathname = location.pathname;

  const condition = y >= 150 || pathname !== "/" || size.width < 576;

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
