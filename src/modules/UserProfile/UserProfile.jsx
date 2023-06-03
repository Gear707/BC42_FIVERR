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
                        <section id="user-segmentation" className="segmentation js-segmentation">
                            <div data-reactroot className="mp-seller-profile">
                                <section className="form-thin">
                                    <article className="bg-white">
                                        <form autoComplete="off" className="js-form-overview">
                                            <div className="inner-row description">
                                                <aside>
                                                    <h3 className="alt hint--top" data-hint="Tell us more about yourself. Buyers are also interested in learning about you as a person.">
                                                        {/* react-text: 8 */}Description{/* /react-text */}
                                                        <a href="#" className="add">Edit Description</a>
                                                    </h3>
                                                </aside>
                                                <section>
                                                    <p />
                                                    <span className="counter hidden">
                                                        {/* react-text: 13 */}0{/* /react-text */}
                                                        {/* react-text: 14 */} / {/* /react-text */}
                                                        {/* react-text: 15 */}600{/* /react-text */}
                                                    </span>
                                                </section>
                                                {/* react-text: 16 */}{/* /react-text */}
                                            </div>
                                        </form>
                                        <form autoComplete="off" className="js-form-proficient-languages">
                                            <div className="inner-row languages">
                                                <aside>
                                                    <h3 className="alt hint--top" data-hint="You can make up to four selections.">
                                                        {/* react-text: 21 */}Languages{/* /react-text */}
                                                        <a href="#" className="add">Add New</a>
                                                    </h3>
                                                    <div className="question">What languages do you speak?</div>
                                                    {/* react-text: 24 */}{/* /react-text */}
                                                </aside>
                                                <section>
                                                    <ul className="items-list">
                                                        <li>
                                                            <span className="title">
                                                                {/* react-text: 29 */}English{/* /react-text */}
                                                                {/* react-text: 30 */} {/* /react-text */}
                                                            </span>
                                                            {/* react-text: 31 */} - {/* /react-text */}
                                                            <span className="sub-title">Basic</span>
                                                            <input type="hidden" name="[seller_profile][proficient_languages][en]" defaultValue="basic" />
                                                            <div className="animate">
                                                                <span className="hint--top" data-hint="Edit">
                                                                    <a href="#" className="pencil" />
                                                                </span>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                    {/* react-empty: 37 */}
                                                    <input type="hidden" defaultValue={1} />
                                                </section>
                                            </div>
                                        </form>
                                        <div className="js-seller-tests" />
                                        <form autoComplete="off" className="js-form-social-account">
                                            <div className="inner-row social-account">
                                                <aside>
                                                    <h3 className="alt hint--top" data-hint="Linking to online social networks adds credibility to your profile. You may add more than one. Note: Your personal information will not be displayed to the buyer.">
                                                        Linked Accounts
                                                    </h3>
                                                    {/* react-text: 44 */}{/* /react-text */}
                                                </aside>
                                                <section>
                                                    <ul>
                                                        <li className="facebook js-btn-facebook-connect " data-should-redirect="false" data-platform="facebook">
                                                            <span>Facebook</span>
                                                        </li>
                                                        <li className="google js-btn-google-connect " data-should-redirect="false" data-platform="google">
                                                            <span>Google</span>
                                                        </li>
                                                        <li className="dribbble js-btn-dribbble-connect " data-should-redirect="false" data-platform="dribbble">
                                                            <span>Dribbble</span>
                                                        </li>
                                                        <li className="stack_exchange js-btn-stackexchange-connect " data-should-redirect="false" data-platform="stack_exchange">
                                                            <span>Stack Overflow</span>
                                                        </li>
                                                        <li className="github js-btn-github-connect " data-should-redirect="false" data-platform="github">
                                                            <span>GitHub</span>
                                                        </li>
                                                        <li className="vimeo js-btn-vimeo-connect " data-should-redirect="false" data-platform="vimeo">
                                                            <span>Vimeo</span>
                                                        </li>
                                                        <li className="twitter js-btn-twitter-connect " data-should-redirect="false" data-platform="twitter">
                                                            <span>Twitter</span>
                                                        </li>
                                                    </ul>
                                                </section>
                                            </div>
                                        </form>
                                        <form autoComplete="off" className="js-form-skills">
                                            <div className="inner-row skills">
                                                <aside>
                                                    <h3 className="alt hint--top" data-hint="Let your buyers know your skills. Skills gained through your previous jobs, hobbies or even everyday life.">
                                                        <span>Skills</span>
                                                        <a href="#" className="add">Add New</a>
                                                    </h3>
                                                    <div className="question">Do you have any skills?</div>
                                                    {/* react-text: 68 */}{/* /react-text */}
                                                </aside>
                                                <section>
                                                    <div className="empty-list">
                                                        {/* react-text: 71 */}Add your Skills{/* /react-text */}
                                                        {/* react-text: 72 */}.{/* /react-text */}
                                                        <input type="hidden" name="[seller_profile]" defaultValue />
                                                    </div>
                                                    {/* react-empty: 74 */}
                                                    <input type="hidden" defaultValue={0} />
                                                </section>
                                            </div>
                                        </form>
                                        <form autoComplete="off" className="js-form-educations">
                                            <div className="inner-row education">
                                                <aside>
                                                    <h3 className="alt hint--top" data-hint="Describe your educational background. It will help buyers get to know you!">
                                                        {/* react-text: 80 */}Education{/* /react-text */}
                                                        <a href="#" className="add">Add New</a>
                                                    </h3>
                                                    <div className="question">Did you attend a college or university?</div>
                                                    {/* react-text: 83 */}{/* /react-text */}
                                                </aside>
                                                <section>
                                                    <div className="empty-list">
                                                        {/* react-text: 86 */}Add your Education{/* /react-text */}
                                                        {/* react-text: 87 */}.{/* /react-text */}
                                                        <input type="hidden" name="[seller_profile]" defaultValue />
                                                    </div>
                                                    <input type="hidden" defaultValue={0} />
                                                </section>
                                            </div>
                                        </form>
                                        <form autoComplete="off" className="js-form-certifications">
                                            <div className="inner-row certification">
                                                <aside>
                                                    <h3 className="alt hint--top" data-hint="Listing your honors and awards can help you stand out from other sellers.">
                                                        {/* react-text: 94 */}Certification{/* /react-text */}
                                                        <a href="#" className="add">Add New</a>
                                                    </h3>
                                                    <div className="question">Do you have any certifications?</div>
                                                    {/* react-text: 97 */}{/* /react-text */}
                                                </aside>
                                                <section>
                                                    <div className="empty-list">
                                                        {/* react-text: 100 */}Add your Certification{/* /react-text */}
                                                        {/* react-text: 101 */}.{/* /react-text */}
                                                        <input type="hidden" name="[seller_profile]" defaultValue />
                                                    </div>
                                                    <input type="hidden" defaultValue={0} />
                                                </section>
                                            </div>
                                        </form>
                                    </article>
                                </section>
                            </div>
                        </section>
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