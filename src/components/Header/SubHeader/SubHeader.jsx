import React, { useEffect, useState } from "react";
import styles from "./SubHeader.module.scss";
import { Nav, NavDropdown } from "react-bootstrap";
import { apiJobCategory } from "../../../apis/jobAPI";
import { useNavigate } from "react-router-dom";

function SubHeader() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  const [jobCategory, setJobCategory] = useState(null);
  // const decodedUrl = decodeURI;

  // Dùng state activeCategory để lưu hạng mục đang active
  const [activeCategory, setActiveCategory] = useState(null);

  const handleMouseEnter = (categoryId) => {
    // set activeCategory bằng categoryId khi hover vào một hạng mục
    setActiveCategory(categoryId);
  };

  const handleMouseLeave = () => {
    // reset activeCategory khi hover out
    setActiveCategory(null);
  };

  const getJobCategory = async () => {
    try {
      const data = await apiJobCategory();
      setJobCategory(data?.content);
      setCount(count + 1);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getJobCategory();
  }, [count]);

  return (
    <>
      <Nav
        id="subHeader"
        className={`nav-justified ${styles.subHeader}`}
        defaultActiveKey="/home"
      >
        {jobCategory?.map((category) => {
          return (
            <NavDropdown
              key={category.id}
              className={`${styles.navLink}`}
              title={category.tenLoaiCongViec}
              // Thêm show={activeCategory === category.id} để hiển thị dropdown của
              // hạng mục được hover vào
              show={activeCategory === category.id}
              onMouseEnter={() => handleMouseEnter(category.id)}
              onMouseLeave={handleMouseLeave}
              onClick={() => {
                navigate(`/${category.tenLoaiCongViec}/${category.id}`);
              }}
            >
              <div className={styles.container}>
                {category.dsNhomChiTietLoai.map((nhom) => {
                  return (
                    <div key={nhom.id} className={styles.nhom}>
                      <span>{nhom.tenNhom}</span>
                      <div className={styles.loai}>
                        {nhom.dsChiTietLoai.map((loai) => {
                          return <p key={loai.id}>{loai.tenChiTiet}</p>;
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </NavDropdown>
          );
        })}
      </Nav>
    </>
  );
}

export default SubHeader;
