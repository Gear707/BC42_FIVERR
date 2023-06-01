import React, { useEffect, useState } from "react";
import styles from "./CategoryMenu.module.scss";
import { Nav } from "react-bootstrap";
import { apiCategoryList } from "../../apis/jobAPI";

function CategoryMenu() {
  const [y, setY] = useState(0);
  const [categoryList, setCategoryList] = useState(null);

  const condition = y > 150;
  console.log(y);
  console.log(condition);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setY(scrollY);
  };

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
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    getCategoryList();
  }, []);

  return (
    <>
      {condition && (
        <Nav className="nav-justified" defaultActiveKey="/home">
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
      )}
    </>
  );
}

export default CategoryMenu;
