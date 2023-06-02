import React, { useEffect, useState } from "react";
import styles from "./SubHeader.module.scss";
import { Nav } from "react-bootstrap";
import { apiCategoryList } from "../../../apis/jobAPI";

function SubHeader() {
  const [categoryList, setCategoryList] = useState(null);

  const getCategoryList = async () => {
    try {
      const data = await apiCategoryList();
      setCategoryList(data?.content);
      console.log(data?.content);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategoryList();
  }, []);

  return (
    <Nav
      className={`nav-justified ${styles.subHeader}`}
      defaultActiveKey="/home"
    >
      {categoryList?.map((category, index) => {
        return (
          <Nav.Item key={category.id}>
            <Nav.Link className={styles.navLink} href="/home">
              {category.tenLoaiCongViec}
            </Nav.Link>
          </Nav.Item>
        );
      })}
    </Nav>
  );
}

export default SubHeader;
