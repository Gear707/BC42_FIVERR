import React, { useEffect } from "react";
import styles from "./SliderCategory.module.scss";
import { Link, useParams } from "react-router-dom";
import popular from "./SliderCategoryData.json";
import Slider from "react-slick";

function SliderCategory() {
  const { MaLoaiCongViec, tenLoaiCongViec } = useParams();
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 4,
    autoplay: false,
    speed: 500,
    autoplaySpeed: 3000,
    // fade: true,
    adaptiveHeight: true,
  };
  useEffect(() => {}, [MaLoaiCongViec, tenLoaiCongViec]);

  return (
    <div id="SliderCategory" className={styles.container}>
      <h2>Most popular in {tenLoaiCongViec}</h2>
      <Slider className="d-flex justify-content-center" {...settings}>
        {popular.map((item, index) => {
          return (
            <div key={index} className={styles.slideGroup}>
              <div className={styles.slide}>
                <Link className="d-flex justify-content-between align-items-center">
                  <img src={item.logo} alt={item.jobTitle} />
                  <span>{item.jobTitle}</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default SliderCategory;
