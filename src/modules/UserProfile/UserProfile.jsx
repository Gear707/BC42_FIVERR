import React from 'react';
import styles from "./UserProfile.module.scss";

function UserProfile() {
    return (
        <div style={{ backgroundColor: "#f7f7f7" }}>
            <div className="container py-5">
                <div className="row justify-content-between">
                    <div className="col-4">
                        <div className="mb-5">
                            <div className={styles.userAvatar}>
                                <div className={styles.statusLine}>
                                    <div className={styles.onlineIndicator} data-user-id={152230993}>
                                        <i>·</i>Online
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <div className="d-flex align-items-center justify-content-center mb-3">
                                        <label className={styles.editImage} htmlFor="profile_image_5334039659997"
                                        >
                                            <div className={styles.cameraWrapper}>
                                                <span className={styles.cameraIcon}>
                                                    <i className="fa-solid fa-camera-retro"></i>
                                                </span>
                                            </div>
                                            <input accept="image/png,image/jpeg" type="file" id="profile_image_5334039659997" className="d-none invisible" name="profile[image]" />
                                            <span className={styles.profileImage}>v</span>
                                        </label>
                                    </div>
                                    <div>
                                        <div className="d-flex flex-column justify-content-center align-items-center">
                                            <span className={styles.username}>
                                                Voidid
                                            </span>
                                            <span className="mt-2" title="Change display name">
                                                <button className={styles.penIcon}>
                                                    <i className="fa-solid fa-pen"></i>
                                                </button>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <ul className={styles.origin}>
                                        <li className={styles.location}>
                                            <span>
                                                <span className={styles.originIcon}>
                                                    <i className="fa-solid fa-location-dot"></i>
                                                </span>From
                                            </span>
                                            <b>Vietnam</b>
                                        </li>
                                        <li className={`mb-0 ${styles.memberSince}`}>
                                            <span>
                                                <span className={styles.originIcon}>
                                                    <i className="fa-solid fa-user"></i>
                                                </span>Member since
                                            </span>
                                            <b>May 2023</b>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div>
                            <article className={styles.basicInfo}>
                                <form>
                                    <div className={`${styles.innerRow} pb-4`}>
                                        <aside>
                                            <h3 title="Tell us more about yourself. Buyers are also interested in learning about you as a person.">
                                                Description
                                            </h3>
                                            <a href="#">Edit Description</a>
                                        </aside>
                                        {/* <section>
                                            <p></p>
                                            <span className="counter hidden">
                                                0
                                                 / 
                                                600
                                            </span>
                                        </section> */}
                                    </div>
                                </form>
                                <form>
                                    <div className={styles.innerRow}>
                                        <aside>
                                            <h3 title="You can make up to four selections.">
                                                Languages
                                            </h3>
                                            <a href="#">Add New</a>
                                        </aside>
                                        <section>
                                            <ul className={styles.itemList}>
                                                <li>
                                                    <span className={styles.title}>
                                                        English
                                                    </span>
                                                    -
                                                    <span className={styles.subTitle}>Basic</span>
                                                    <input type="hidden" name="[seller_profile][proficient_languages][en]" defaultValue="basic" />
                                                    <div className={styles.animate}>
                                                        <span title="Edit">
                                                            <a href="#">
                                                                <i className="fa-solid fa-pencil"></i>
                                                            </a>
                                                        </span>
                                                    </div>
                                                </li>
                                            </ul>
                                            <input type="hidden" defaultValue={1} />
                                        </section>
                                    </div>
                                </form>
                                <form className={styles.socialAccount}>
                                    <div className={styles.innerRow}>
                                        <aside>
                                            <h3 title="Linking to online social networks adds credibility to your profile. You may add more than one. Note: Your personal information will not be displayed to the buyer.">
                                                Linked Accounts
                                            </h3>
                                        </aside>
                                        <section>
                                            <ul>
                                                <li>
                                                    <span>Facebook</span>
                                                </li>
                                                <li>
                                                    <span>Google</span>
                                                </li>
                                                <li>
                                                    <span>Dribbble</span>
                                                </li>
                                                <li>
                                                    <span>Stack Overflow</span>
                                                </li>
                                                <li>
                                                    <span>GitHub</span>
                                                </li>
                                                <li>
                                                    <span>Vimeo</span>
                                                </li>
                                                <li>
                                                    <span>Twitter</span>
                                                </li>
                                            </ul>
                                        </section>
                                    </div>
                                </form>
                                <form>
                                    <div className={styles.innerRow}>
                                        <aside>
                                            <h3 title="Let your buyers know your skills. Skills gained through your previous jobs, hobbies or even everyday life.">
                                                Skills
                                            </h3>
                                            <a href="#">Add New</a>
                                        </aside>
                                        <section>
                                            <div className={styles.emptyList}>
                                                Add your Skills
                                                <input type="hidden" name="[seller_profile]" defaultValue />
                                            </div>
                                            <input type="hidden" defaultValue={0} />
                                        </section>
                                    </div>
                                </form>
                                <form>
                                    <div className={styles.innerRow}>
                                        <aside>
                                            <h3 title="Describe your educational background. It will help buyers get to know you!">
                                                Education
                                            </h3>
                                            <a href="#">Add New</a>
                                        </aside>
                                        <section>
                                            <div className={styles.emptyList}>
                                                Add your Education
                                                <input type="hidden" name="[seller_profile]" defaultValue />
                                            </div>
                                            <input type="hidden" defaultValue={0} />
                                        </section>
                                    </div>
                                </form>
                                <form>
                                    <div className={styles.innerRow}>
                                        <aside>
                                            <h3 title="Listing your honors and awards can help you stand out from other sellers.">
                                                Certification
                                            </h3>
                                            <a href="#">Add New</a>
                                        </aside>
                                        <section>
                                            <div className={styles.emptyList}>
                                                Add your Certification
                                                <input type="hidden" name="[seller_profile]" defaultValue />
                                            </div>
                                            <input type="hidden" defaultValue={0} />
                                        </section>
                                    </div>
                                </form>
                            </article>
                        </div>
                    </div>
                    <div className="col-7">
                        <div className="bg-white">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserProfile;