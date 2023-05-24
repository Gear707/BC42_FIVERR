import React from "react";
import styles from "./Services.module.scss";
import Slider from "react-slick";

function Services() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    adaptiveHeight: true,
  };
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <h2>Popular services</h2>
        <Slider {...settings}>
          <div className="d-flex justify-content-center">
            <div className={styles.services}>
              <a href="https://www.fiverr.com/categories/graphics-design/ai-art-prompt?source=hplo_subcat_first_step&pos=1">
                <h4>
                  <small>Add talent to AI</small>
                  AI Artists
                </h4>
              </a>
              <img
                alt="AI Artists"
                src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/f27bec553efc12cc60baed89b8f2223e-1674661140708/ai-artists-2x.png"
                data-uw-rm-ima-original="ai artists"
              />
            </div>

            <div className={styles.services}>
              <a href="https://www.fiverr.com/categories/graphics-design/creative-logo-design?source=hplo_subcat_first_step&pos=2">
                <h4>
                  <small>Build your brand</small>Logo Design
                </h4>
              </a>
              <img
                alt="Logo Design"
                src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/logo-design-2x.png"
                data-uw-rm-ima-original="logo design"
              />
            </div>

            <div className={styles.services}>
              <a href="https://www.fiverr.com/categories/programming-tech/website-development/wordpress-development?source=hplo_subcat_first_step">
                <h4>
                  <small>Customize your site</small>WordPress
                </h4>
              </a>
              <img
                alt="WordPress"
                src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/ae11e2d45410b0eded7fba0e46b09dbd-1598561917003/wordpress-2x.png"
                data-uw-rm-ima-original="wordpress"
              />
            </div>

            <div className={styles.services}>
              <a href="https://www.fiverr.com/categories/music-audio/voice-overs?source=hplo_subcat_first_step&pos=4">
                <h4>
                  <small>Share your message</small>Voice Over
                </h4>
              </a>
              <img
                alt="Voice Over"
                src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741669/voiceover-2x.png"
                data-uw-rm-ima-original="voice over"
              />
            </div>

            <div className={styles.services}>
              <a href="https://www.fiverr.com/categories/video-animation/animated-explainer-videos?source=hplo_subcat_first_step&pos=5">
                <h4>
                  <small>Engage your audience</small>Video Explainer
                </h4>
              </a>
              <img
                alt="Video Explainer"
                src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741663/animated-explainer-2x.png"
                data-uw-rm-ima-original="video explainer"
              />
            </div>
          </div>

          <div className="d-flex justify-content-center">
            <div className={styles.services}>
              <a href="https://www.fiverr.com/categories/graphics-design/ai-art-prompt?source=hplo_subcat_first_step&pos=1">
                <h4>
                  <small>Reach more customers</small>Social Media
                </h4>
              </a>
              <img
                alt="Social Media"
                src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741667/social-2x.png"
                data-uw-rm-ima-original="ai artists"
              />
            </div>

            <div className={styles.services}>
              <a href="https://www.fiverr.com/categories/graphics-design/creative-logo-design?source=hplo_subcat_first_step&pos=2">
                <h4>
                  <small>Unlock growth online</small>SEO
                </h4>
              </a>
              <img
                alt="SEO"
                src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741668/seo-2x.png"
                data-uw-rm-ima-original="logo design"
              />
            </div>

            <div className={styles.services}>
              <a href="https://www.fiverr.com/categories/graphics-design/digital-illustration?source=hplo_subcat_first_step&pos=8">
                <h4>
                  <small>Color your dreams</small>Illustration
                </h4>
              </a>
              <img
                alt="Illustration"
                src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/illustration-2x.png"
                data-uw-rm-ima-original="wordpress"
              />
            </div>

            <div className={styles.services}>
              <a href="https://www.fiverr.com/categories/writing-translation/quality-translation-services?source=hplo_subcat_first_step&pos=9">
                <h4>
                  <small>Go global</small>Translation
                </h4>
              </a>
              <img
                alt="Translation"
                src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741674/translation-2x.png"
                data-uw-rm-ima-original="voice over"
              />
            </div>

            <div className={styles.services}>
              <a href="https://www.fiverr.com/categories/data/data-entry?source=hplo_subcat_first_step&pos=10">
                <h4>
                  <small>Learn your business</small>Data Entry
                </h4>
              </a>
              <img
                alt="Data Entry"
                src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/data-entry-2x.png"
                data-uw-rm-ima-original="video explainer"
              />
            </div>
          </div>
          <div className={styles.services}>
            <a href="https://www.fiverr.com/categories/graphics-design/book-design/cover?source=hplo_subcat_first_step&pos=11">
              <h4>
                <small>Showcase your story</small>Book Covers
              </h4>
            </a>
            <img
              alt="Book Covers"
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/book-covers-2x.png"
              data-uw-rm-ima-original="video explainer"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Services;
