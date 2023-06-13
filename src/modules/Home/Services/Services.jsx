import React from "react";
import styles from "./Services.module.scss";
import Slider from "react-slick";
import useWindowResize from "../../../helpers/useWindowResize";

const services = [
  {
    id: 1,
    action: "Add talent to AI",
    title: "AI Artists",
    link: "https://www.fiverr.com/categories/graphics-design/ai-art-prompt?source=hplo_subcat_first_step&pos=1",
    image:
      "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/f27bec553efc12cc60baed89b8f2223e-1674661140708/ai-artists-2x.png",
  },
  {
    id: 2,
    action: "Build your brand",
    title: " Logo Design",
    link: "https://www.fiverr.com/categories/graphics-design/creative-logo-design?source=hplo_subcat_first_step&pos=2",
    image:
      "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/logo-design-2x.png",
  },
  {
    id: 3,
    action: "Customize your site",
    title: "WordPress",
    link: "https://www.fiverr.com/categories/programming-tech/website-development/wordpress-development?source=hplo_subcat_first_step",
    image:
      "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/ae11e2d45410b0eded7fba0e46b09dbd-1598561917003/wordpress-2x.png",
  },
  {
    id: 4,
    action: "Share your message",
    title: "Voice Over",
    link: "https://www.fiverr.com/categories/music-audio/voice-overs?source=hplo_subcat_first_step&pos=4",
    image:
      "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741669/voiceover-2x.png",
  },
  {
    id: 5,
    action: "Engage your audience",
    title: "Video Explainer",
    link: "https://www.fiverr.com/categories/video-animation/animated-explainer-videos?source=hplo_subcat_first_step&pos=5",
    image:
      "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741663/animated-explainer-2x.png",
  },
  {
    id: 6,
    action: "Reach more customer",
    title: "Social Media",
    link: "https://www.fiverr.com/categories/graphics-design/ai-art-prompt?source=hplo_subcat_first_step&pos=1",
    image:
      "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741667/social-2x.png",
  },
  {
    id: 7,
    action: "Unlock growth online",
    title: "SEO",
    link: "https://www.fiverr.com/categories/graphics-design/creative-logo-design?source=hplo_subcat_first_step&pos=2",
    image:
      "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741668/seo-2x.png",
  },
  {
    id: 8,
    action: "Color your dreams",
    title: "Illustration",
    link: "https://www.fiverr.com/categories/graphics-design/digital-illustration?source=hplo_subcat_first_step&pos=8",
    image:
      "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/illustration-2x.png",
  },
  {
    id: 9,
    action: "Go global",
    title: "Translation",
    link: "https://www.fiverr.com/categories/writing-translation/quality-translation-services?source=hplo_subcat_first_step&pos=9",
    image:
      "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741674/translation-2x.png",
  },
  {
    id: 10,
    action: "Learn your business",
    title: "Data Entry",
    link: "https://www.fiverr.com/categories/data/data-entry?source=hplo_subcat_first_step&pos=10",
    image:
      "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/data-entry-2x.png",
  },
  {
    id: 11,
    action: "Showcase your story",
    title: "Book Covers",
    link: "https://www.fiverr.com/categories/graphics-design/book-design/cover?source=hplo_subcat_first_step&pos=11",
    image:
      "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/book-covers-2x.png",
  },
];

function Services() {
  const size = useWindowResize();
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    // variableWidth: true,
    draggable: true,
    swipeToSlide: true,
  };
  return (
    <div id="Services" className={styles.background}>
      <div className={styles.container}>
        <h2>Popular services</h2>

        <Slider
          {...settings}
          className="d-flex justify-content-center d-none d-xl-block"
        >
          <div className="d-flex justify-content-center slider-package">
            {services.slice(0, 5).map((item, index) => {
              return (
                <div key={item.id} className={styles.services}>
                  <a href={item.link}>
                    <h4>
                      <small>{item.action}</small>
                      {item.title}
                    </h4>
                  </a>
                  <img
                    alt={item.title}
                    src={item.image}
                    data-uw-rm-ima-original="ai artists"
                  />
                </div>
              );
            })}
          </div>
          <div className="d-flex justify-content-center slider-package">
            {services.slice(5, 10).map((item, index) => {
              return (
                <div key={item.id} className={styles.services}>
                  <a href={item.link}>
                    <h4>
                      <small>{item.action}</small>
                      {item.title}
                    </h4>
                  </a>
                  <img
                    alt={item.title}
                    src={item.image}
                    data-uw-rm-ima-original="ai artists"
                  />
                </div>
              );
            })}
          </div>
          <div className="d-flex justify-content-center slider-package">
            {services.slice(6, 11).map((item, index) => {
              return (
                <div key={item.id} className={styles.services}>
                  <a href={item.link}>
                    <h4>
                      <small>{item.action}</small>
                      {item.title}
                    </h4>
                  </a>
                  <img
                    alt={item.title}
                    src={item.image}
                    data-uw-rm-ima-original="ai artists"
                  />
                </div>
              );
            })}
          </div>
        </Slider>

        <Slider
          {...settings}
          className="d-flex justify-content-center 	d-none d-lg-block d-xl-none"
        >
          <div className="d-flex justify-content-center slider-package">
            {services.slice(0, 4).map((item, index) => {
              return (
                <div key={item.id} className={styles.services}>
                  <a href={item.link}>
                    <h4>
                      <small>{item.action}</small>
                      {item.title}
                    </h4>
                  </a>
                  <img
                    alt={item.title}
                    src={item.image}
                    data-uw-rm-ima-original="ai artists"
                  />
                </div>
              );
            })}
          </div>
          <div className="d-flex justify-content-center slider-package">
            {services.slice(4, 8).map((item, index) => {
              return (
                <div key={item.id} className={styles.services}>
                  <a href={item.link}>
                    <h4>
                      <small>{item.action}</small>
                      {item.title}
                    </h4>
                  </a>
                  <img
                    alt={item.title}
                    src={item.image}
                    data-uw-rm-ima-original="ai artists"
                  />
                </div>
              );
            })}
          </div>
          <div className="d-flex justify-content-center slider-package">
            {services.slice(8, 11).map((item, index) => {
              return (
                <div key={item.id} className={styles.services}>
                  <a href={item.link}>
                    <h4>
                      <small>{item.action}</small>
                      {item.title}
                    </h4>
                  </a>
                  <img
                    alt={item.title}
                    src={item.image}
                    data-uw-rm-ima-original="ai artists"
                  />
                </div>
              );
            })}
          </div>
        </Slider>

        <Slider
          {...settings}
          className="d-flex justify-content-center d-none d-md-block d-lg-none"
        >
          <div className="d-flex justify-content-center slider-package">
            {services.slice(0, 3).map((item, index) => {
              return (
                <div key={item.id} className={styles.services}>
                  <a href={item.link}>
                    <h4>
                      <small>{item.action}</small>
                      {item.title}
                    </h4>
                  </a>
                  <img
                    alt={item.title}
                    src={item.image}
                    data-uw-rm-ima-original="ai artists"
                  />
                </div>
              );
            })}
          </div>
          <div className="d-flex justify-content-center slider-package">
            {services.slice(3, 6).map((item, index) => {
              return (
                <div key={item.id} className={styles.services}>
                  <a href={item.link}>
                    <h4>
                      <small>{item.action}</small>
                      {item.title}
                    </h4>
                  </a>
                  <img
                    alt={item.title}
                    src={item.image}
                    data-uw-rm-ima-original="ai artists"
                  />
                </div>
              );
            })}
          </div>
          <div className="d-flex justify-content-center slider-package">
            {services.slice(6, 9).map((item, index) => {
              return (
                <div key={item.id} className={styles.services}>
                  <a href={item.link}>
                    <h4>
                      <small>{item.action}</small>
                      {item.title}
                    </h4>
                  </a>
                  <img
                    alt={item.title}
                    src={item.image}
                    data-uw-rm-ima-original="ai artists"
                  />
                </div>
              );
            })}
          </div>
          <div className="d-flex justify-content-center slider-package">
            {services.slice(9, 11).map((item, index) => {
              return (
                <div key={item.id} className={styles.services}>
                  <a href={item.link}>
                    <h4>
                      <small>{item.action}</small>
                      {item.title}
                    </h4>
                  </a>
                  <img
                    alt={item.title}
                    src={item.image}
                    data-uw-rm-ima-original="ai artists"
                  />
                </div>
              );
            })}
          </div>
        </Slider>

        <Slider
          {...settings}
          className="d-flex justify-content-center d-none d-sm-block d-md-none"
        >
          <div className="d-flex justify-content-center slider-package">
            {services.slice(0, 2).map((item, index) => {
              return (
                <div key={item.id} className={styles.services}>
                  <a href={item.link}>
                    <h4>
                      <small>{item.action}</small>
                      {item.title}
                    </h4>
                  </a>
                  <img
                    alt={item.title}
                    src={item.image}
                    data-uw-rm-ima-original="ai artists"
                  />
                </div>
              );
            })}
          </div>
          <div className="d-flex justify-content-center slider-package">
            {services.slice(2, 4).map((item, index) => {
              return (
                <div key={item.id} className={styles.services}>
                  <a href={item.link}>
                    <h4>
                      <small>{item.action}</small>
                      {item.title}
                    </h4>
                  </a>
                  <img
                    alt={item.title}
                    src={item.image}
                    data-uw-rm-ima-original="ai artists"
                  />
                </div>
              );
            })}
          </div>
          <div className="d-flex justify-content-center slider-package">
            {services.slice(4, 6).map((item, index) => {
              return (
                <div key={item.id} className={styles.services}>
                  <a href={item.link}>
                    <h4>
                      <small>{item.action}</small>
                      {item.title}
                    </h4>
                  </a>
                  <img
                    alt={item.title}
                    src={item.image}
                    data-uw-rm-ima-original="ai artists"
                  />
                </div>
              );
            })}
          </div>
          <div className="d-flex justify-content-center slider-package">
            {services.slice(6, 8).map((item, index) => {
              return (
                <div key={item.id} className={styles.services}>
                  <a href={item.link}>
                    <h4>
                      <small>{item.action}</small>
                      {item.title}
                    </h4>
                  </a>
                  <img
                    alt={item.title}
                    src={item.image}
                    data-uw-rm-ima-original="ai artists"
                  />
                </div>
              );
            })}
          </div>
          <div className="d-flex justify-content-center slider-package">
            {services.slice(8, 10).map((item, index) => {
              return (
                <div key={item.id} className={styles.services}>
                  <a href={item.link}>
                    <h4>
                      <small>{item.action}</small>
                      {item.title}
                    </h4>
                  </a>
                  <img
                    alt={item.title}
                    src={item.image}
                    data-uw-rm-ima-original="ai artists"
                  />
                </div>
              );
            })}
          </div>
          <div className="d-flex justify-content-center slider-package">
            {services.slice(10, 11).map((item, index) => {
              return (
                <div key={item.id} className={styles.services}>
                  <a href={item.link}>
                    <h4>
                      <small>{item.action}</small>
                      {item.title}
                    </h4>
                  </a>
                  <img
                    alt={item.title}
                    src={item.image}
                    data-uw-rm-ima-original="ai artists"
                  />
                </div>
              );
            })}
          </div>
        </Slider>

        {size.width < 576 && (
          <Slider {...settings} className="d-flex justify-content-center">
            <div className="d-flex justify-content-center slider-package">
              {services.slice(0, 1).map((item, index) => {
                return (
                  <div key={item.id} className={styles.services}>
                    <a href={item.link}>
                      <h4>
                        <small>{item.action}</small>
                        {item.title}
                      </h4>
                    </a>
                    <img
                      alt={item.title}
                      src={item.image}
                      data-uw-rm-ima-original="ai artists"
                    />
                  </div>
                );
              })}
            </div>
            <div className="d-flex justify-content-center slider-package">
              {services.slice(1, 2).map((item, index) => {
                return (
                  <div key={item.id} className={styles.services}>
                    <a href={item.link}>
                      <h4>
                        <small>{item.action}</small>
                        {item.title}
                      </h4>
                    </a>
                    <img
                      alt={item.title}
                      src={item.image}
                      data-uw-rm-ima-original="ai artists"
                    />
                  </div>
                );
              })}
            </div>
            <div className="d-flex justify-content-center slider-package">
              {services.slice(2, 3).map((item, index) => {
                return (
                  <div key={item.id} className={styles.services}>
                    <a href={item.link}>
                      <h4>
                        <small>{item.action}</small>
                        {item.title}
                      </h4>
                    </a>
                    <img
                      alt={item.title}
                      src={item.image}
                      data-uw-rm-ima-original="ai artists"
                    />
                  </div>
                );
              })}
            </div>
            <div className="d-flex justify-content-center slider-package">
              {services.slice(3, 4).map((item, index) => {
                return (
                  <div key={item.id} className={styles.services}>
                    <a href={item.link}>
                      <h4>
                        <small>{item.action}</small>
                        {item.title}
                      </h4>
                    </a>
                    <img
                      alt={item.title}
                      src={item.image}
                      data-uw-rm-ima-original="ai artists"
                    />
                  </div>
                );
              })}
            </div>
            <div className="d-flex justify-content-center slider-package">
              {services.slice(4, 5).map((item, index) => {
                return (
                  <div key={item.id} className={styles.services}>
                    <a href={item.link}>
                      <h4>
                        <small>{item.action}</small>
                        {item.title}
                      </h4>
                    </a>
                    <img
                      alt={item.title}
                      src={item.image}
                      data-uw-rm-ima-original="ai artists"
                    />
                  </div>
                );
              })}
            </div>
            <div className="d-flex justify-content-center slider-package">
              {services.slice(5, 6).map((item, index) => {
                return (
                  <div key={item.id} className={styles.services}>
                    <a href={item.link}>
                      <h4>
                        <small>{item.action}</small>
                        {item.title}
                      </h4>
                    </a>
                    <img
                      alt={item.title}
                      src={item.image}
                      data-uw-rm-ima-original="ai artists"
                    />
                  </div>
                );
              })}
            </div>
            <div className="d-flex justify-content-center slider-package">
              {services.slice(6, 7).map((item, index) => {
                return (
                  <div key={item.id} className={styles.services}>
                    <a href={item.link}>
                      <h4>
                        <small>{item.action}</small>
                        {item.title}
                      </h4>
                    </a>
                    <img
                      alt={item.title}
                      src={item.image}
                      data-uw-rm-ima-original="ai artists"
                    />
                  </div>
                );
              })}
            </div>
            <div className="d-flex justify-content-center slider-package">
              {services.slice(7, 8).map((item, index) => {
                return (
                  <div key={item.id} className={styles.services}>
                    <a href={item.link}>
                      <h4>
                        <small>{item.action}</small>
                        {item.title}
                      </h4>
                    </a>
                    <img
                      alt={item.title}
                      src={item.image}
                      data-uw-rm-ima-original="ai artists"
                    />
                  </div>
                );
              })}
            </div>
            <div className="d-flex justify-content-center slider-package">
              {services.slice(8, 9).map((item, index) => {
                return (
                  <div key={item.id} className={styles.services}>
                    <a href={item.link}>
                      <h4>
                        <small>{item.action}</small>
                        {item.title}
                      </h4>
                    </a>
                    <img
                      alt={item.title}
                      src={item.image}
                      data-uw-rm-ima-original="ai artists"
                    />
                  </div>
                );
              })}
            </div>
            <div className="d-flex justify-content-center slider-package">
              {services.slice(9, 10).map((item, index) => {
                return (
                  <div key={item.id} className={styles.services}>
                    <a href={item.link}>
                      <h4>
                        <small>{item.action}</small>
                        {item.title}
                      </h4>
                    </a>
                    <img
                      alt={item.title}
                      src={item.image}
                      data-uw-rm-ima-original="ai artists"
                    />
                  </div>
                );
              })}
            </div>
            <div className="d-flex justify-content-center slider-package">
              {services.slice(10, 11).map((item, index) => {
                return (
                  <div key={item.id} className={styles.services}>
                    <a href={item.link}>
                      <h4>
                        <small>{item.action}</small>
                        {item.title}
                      </h4>
                    </a>
                    <img
                      alt={item.title}
                      src={item.image}
                      data-uw-rm-ima-original="ai artists"
                    />
                  </div>
                );
              })}
            </div>
          </Slider>
        )}
      </div>
    </div>
  );
}

export default Services;
