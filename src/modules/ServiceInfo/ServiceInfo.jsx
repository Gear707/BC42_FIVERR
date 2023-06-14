import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiServiceInfo } from "../../apis/jobAPI";
import { Dropdown, Nav } from "react-bootstrap";
import styles from "./ServiceInfo.module.scss";

function ServiceInfo() {
  const { keyword, MaCongViec } = useParams();
  console.log(keyword, MaCongViec);
  const [info, setInfo] = useState();

  const getServiceInfo = async () => {
    try {
      const data = await apiServiceInfo(MaCongViec);
      setInfo(data.content);
      console.log(data.content);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(info);
  useEffect(() => {
    getServiceInfo();
  }, [MaCongViec]);

  return (
    <div id="ServiceInfo" className={styles.container}>
      {info?.map((item) => {
        return (
          <div key={item.id}>
            <div className={styles.packageInfo}>
              <Nav className="d-flex align-items-center">
                <Nav.Link>
                  <span>{item.tenLoaiCongViec}</span>
                </Nav.Link>
                <i className="fa-solid fa-chevron-right"></i>

                <Nav.Link>
                  <span>{item.tenNhomChiTietLoai}</span>
                </Nav.Link>
                <i className="fa-solid fa-chevron-right"></i>

                <Nav.Link>
                  <span>{item.tenChiTietLoai}</span>
                </Nav.Link>
              </Nav>
              <h3>{item.congViec.tenCongViec}</h3>
              <div className={styles.sellerInfo}>
                <div className={styles.sellerBrief}>
                  <img src={item.avatar} alt="" />
                  <span className={styles.name}>{item.tenNguoiTao}</span>
                  <span className={styles.topRated}>Top rated seller</span>
                  <span>|</span>
                  <span>
                    <i className="fa-solid fa-star"></i>(
                    {item.congViec.saoCongViec})
                  </span>
                  <span>|</span>
                  <span>{item.congViec.danhGia}</span>
                </div>
                <div className={styles.sellerExperience}>
                  <img src={item.congViec.hinhAnh} alt="" />
                </div>
              </div>
              <div className={styles.offer}>
                <b>About This Gig</b>
                <p>Top Rated Seller With all positive reviews</p>
                <p>{item.congViec.moTa}</p>
                <b>Things I offer</b>
                <p>Web Development:</p>
                <ul>
                  <li>HTML</li>
                  <li>CSS / SCSS</li>
                  <li>JavaScript</li>
                  <li>Bootstrap</li>
                  <li>And more</li>
                </ul>
                <p>Web Apps (Newest Versions):</p>
                <ul>
                  <li>React JS developer</li>
                  <li>Angular</li>
                  <li>Vue JS</li>
                </ul>
                <p>Backend (Server Programming):</p>
                <ul>
                  <li>NodeJS</li>
                  <li>PHP</li>
                  <li>Laravel developer</li>
                  <li>Python</li>
                </ul>
                <p className={styles.benefit}>
                  <strong>
                    <u>Why Choose Me?</u>
                  </strong>
                </p>
                <ul>
                  <li>Extensive Experience in Web Development</li>
                  <li>Premium Customer Support</li>
                  <li>Client Satisfaction</li>
                  <li>Around The Clock Availability</li>
                </ul>
              </div>
              <div className={styles.aboutSeller}>
                <b>About The Seller</b>
                <div className={styles.extendSeller}>
                  <img src={item.avatar} alt="" />
                  <div>
                    <p>{item.tenNguoiTao}</p>
                    <p>Web Developer</p>
                    <p>{item.congViec.saoCongViec}</p>
                    <button className="btn btn-primary">Contact Me</button>
                  </div>
                </div>
              </div>
              <div className={styles.FAQ}>
                <Dropdown>How do revisions work?</Dropdown>
                <Dropdown>What makes you a Fiverr Pro seller?</Dropdown>
                <Dropdown>
                  Can I purchase a robust development, even if it's not in
                  available packages?
                </Dropdown>
              </div>
            </div>

            <div className={styles.packageCost}></div>
          </div>
        );
      })}
    </div>
  );
}
export default ServiceInfo;
