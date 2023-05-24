import React from "react";
import styles from "./Banner.module.scss";
import "./slick.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Banner() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    fade: true,
    adaptiveHeight: true,
  };
  return (
    <div id="Banner" className={styles.background}>
      <Slider className={styles.slider} {...settings}>
        <div className={styles.valentina}>
          <div className={styles.info}>
            <div className={styles.star}>
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
            </div>

            <p>
              Valentina,
              <b>AI Artist</b>
            </p>
          </div>
        </div>

        <div className={styles.andrea}>
          <div className={styles.info}>
            <p>
              Andrea, <b>Fashion Designer</b>
            </p>
          </div>
        </div>

        <div className={styles.moon}>
          <div className={styles.info}>
            <div className={styles.star}>
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
            </div>
            <p>
              Moon, <b>Marketing Expert</b>
            </p>
          </div>
        </div>

        <div className={styles.rikita}>
          <div className={styles.info}>
            <p>
              Ritika, <b>Shoemaker and Designer</b>
            </p>
          </div>
        </div>

        <div className={styles.zach}>
          <div className={styles.info}>
            <div className={styles.star}>
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
            </div>
            <p>
              Zach, <b>Bar Owner</b>
            </p>
          </div>
        </div>

        <div className={styles.gabrielle}>
          <div className={styles.info}>
            <p>
              Gabrielle, <b>Video Editor</b>
            </p>
          </div>
        </div>
      </Slider>
      <div className={styles.container}>
        <div className={styles.services}>
          <h1 className="font-domaine">
            <span>
              Find the right <i>freelance service</i>, right away
            </span>
          </h1>
          <div className={styles.serviceSearch}>
            <form className="input-group">
              <input
                className={`${styles.serviceInput} form-control`}
                type="search"
                placeholder="Search for any services..."
              />
              <a className={styles.submitButton} type="submit">
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                >
                  <path d="m15.89 14.653-3.793-3.794a.37.37 0 0 0-.266-.109h-.412A6.499 6.499 0 0 0 6.5 0C2.91 0 0 2.91 0 6.5a6.499 6.499 0 0 0 10.75 4.919v.412c0 .1.04.194.11.266l3.793 3.794a.375.375 0 0 0 .531 0l.707-.707a.375.375 0 0 0 0-.53ZM6.5 11.5c-2.763 0-5-2.238-5-5 0-2.763 2.237-5 5-5 2.762 0 5 2.237 5 5 0 2.762-2.238 5-5 5Z" />
                </svg>
              </a>
            </form>
          </div>

          <div className={styles.popular}>
            <span>Popular: </span>
            <button>Website Design</button>
            <button>WordPress</button>
            <button>Logo Design</button>
            <button>AI Services</button>
          </div>
        </div>
      </div>
      {/* <div className="trusted d-flex justify-content-center">
        Trusted by:
        <span>Meta</span>
        <span>Google</span>
        <span>NetFlix</span>
        <span>P&G</span>
        <span>PayPal</span>
      </div> */}
    </div>
  );
}

export default Banner;
