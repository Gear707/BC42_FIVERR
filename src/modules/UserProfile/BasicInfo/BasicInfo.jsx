import React from 'react';
import styles from "./BasicInfo.module.scss";

function BasicInfo() {
    return (
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
    );
}

export default BasicInfo;