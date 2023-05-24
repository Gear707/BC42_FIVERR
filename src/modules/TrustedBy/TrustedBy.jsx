import React from "react";
import styles from "./TrustedBy.module.scss";
function TrustedBy() {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <span className={styles.trustedBy}>Trusted by:</span>
        <img
          className={styles.brand}
          src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/meta.12b5e5c.png"
          alt="facebook"
          data-uw-rm-ima-original="facebook"
        />
        <img
          className={styles.brand}
          src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/google.61e78c8.png"
          alt="Google"
          data-uw-rm-ima-original="google"
        />
        <img
          className={styles.brand}
          src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/netflix.96c5e3f.png"
          alt="NETFLIX"
          data-uw-rm-ima-original="netflix"
        />
        <img
          className={styles.brand}
          src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/pandg.0f4cfc2.png"
          alt="P&G"
          data-uw-rm-ima-original="p&g"
        />
        <img
          className={styles.brand}
          src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/paypal.305e264.png"
          alt="PayPal"
          data-uw-rm-ima-original="paypal"
        />
      </div>
    </div>
  );
}

export default TrustedBy;
