import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import Switch from "react-switch";
import styles from "./SwitchNav.module.scss";
import "./Switch.scss";

function SwitchNav() {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (checked) => {
    setIsChecked(checked);
  };

  return (
    <>
      <Nav className={styles.container}>
        <Nav.Item className={styles.navItem}>
          <Switch checked={isChecked} onChange={handleChange} />
          <span>Pro services</span>
        </Nav.Item>

        <Nav.Item className={styles.navItem}>
          <Switch checked={isChecked} onChange={handleChange} />
          <span>Local sellers</span>
        </Nav.Item>

        <Nav.Item className={styles.navItem}>
          <Switch checked={isChecked} onChange={handleChange} />
          <span>Online sellers</span>
        </Nav.Item>
      </Nav>
    </>
  );
}

export default SwitchNav;
