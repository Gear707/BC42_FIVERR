import React, { useEffect, useState } from 'react';
import styles from "./BasicInfo.module.scss";

function BasicInfo({ userInfo }) {
    const [editSections, setEditSections] = useState([]);

    const handleSelectSections = (index) => {
        const editingSections = [...editSections];
        editingSections[index] = !editingSections[index];
        setEditSections(editingSections);
    };

    useEffect(() => {
        handleSelectSections(new Array(5).fill(false));
    }, []);

    return (
        <div>
            <article className={styles.basicInfo}>
                <form>
                    <div className={`${styles.innerRow} pb-4`}>
                        <aside>
                            <h3 title="Tell us more about yourself. Buyers are also interested in learning about you as a person.">
                                Description
                            </h3>
                            <a className={editSections[0] ? "d-none" : "d-inline-block"}
                                onClick={() => handleSelectSections(0)}
                            >
                                Edit Description
                            </a>
                        </aside>
                        <section>
                            {editSections[0] && (
                                <div className={styles.formWrapper}>
                                    <div className={styles.textareaWrapper}>
                                        {/* <input type="text" maxLength={20} defaultValue=""
                                            placeholder="Add Language"
                                            className="form-control w-100"
                                        /> */}
                                        <textarea maxLength={600} minLength={150} placeholder="Please tell us about any hobbies, additional expertise, or anything else you’d like to add." defaultValue=""></textarea>
                                    </div>
                                    <div className="d-flex mt-2">
                                        <input type="button" defaultValue="Update"
                                            className="btn btn-success w-50" disabled
                                        />
                                        <input type="button" defaultValue="Cancel"
                                            className="btn btn-secondary w-50 ms-2"
                                            onClick={() => handleSelectSections(0)}
                                        />
                                    </div>
                                </div>
                            )}
                        </section>
                    </div>
                </form>
                <form>
                    <div className={styles.innerRow}>
                        <aside>
                            <h3 title="You can make up to four selections.">
                                Languages
                            </h3>
                            <a className={editSections[1] ? "d-none" : "d-inline-block"}
                                onClick={() => handleSelectSections(1)}
                            >
                                Add New
                            </a>
                        </aside>
                        <section>
                            {editSections[1] && (
                                <div className={styles.formWrapper}>
                                    <div className={styles.inputWrapper}>
                                        <input type="text" maxLength={20} defaultValue=""
                                            placeholder="Add Language"
                                            className="form-control w-100"
                                        />
                                    </div>
                                    <div className={styles.buttonWrapper}>
                                        <input type="button" defaultValue="Add"
                                            className="btn btn-success w-50" disabled
                                        />
                                        <input type="button" defaultValue="Cancel"
                                            className="btn btn-secondary w-50 ms-2"
                                            onClick={() => handleSelectSections(1)}
                                        />
                                    </div>
                                </div>
                            )}
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
                            <a className={editSections[2] ? "d-none" : "d-inline-block"}
                                onClick={() => handleSelectSections(2)}
                            >
                                Add New
                            </a>
                        </aside>
                        <section>
                            {editSections[2] && (
                                <div className={styles.formWrapper}>
                                    <div className={styles.inputWrapper}>
                                        <input type="text" maxLength={20} defaultValue=""
                                            placeholder="Add Skills (e.g. Voice Talent)"
                                            className="form-control w-100"
                                        />
                                    </div>
                                    <div className={styles.buttonWrapper}>
                                        <input type="button" defaultValue="Add"
                                            className="btn btn-success w-50" disabled
                                        />
                                        <input type="button" defaultValue="Cancel"
                                            className="btn btn-secondary w-50 ms-2"
                                            onClick={() => handleSelectSections(2)}
                                        />
                                    </div>
                                </div>
                            )}
                            <div className={styles.emptyList}>
                                {userInfo?.skill?.length >= 1 ? `${userInfo?.skill}` : "Add your Skills"}
                            </div>
                        </section>
                    </div>
                </form>
                <form>
                    <div className={styles.innerRow}>
                        <aside>
                            <h3 title="Describe your educational background. It will help buyers get to know you!">
                                Education
                            </h3>
                            <a className={editSections[3] ? "d-none" : "d-inline-block"}
                                onClick={() => handleSelectSections(3)}
                            >
                                Add New
                            </a>
                        </aside>
                        <section>
                            {editSections[3] && (
                                <div className={styles.formWrapper}>
                                    <div className={styles.inputWrapper}>
                                        <input type="text" maxLength={20} defaultValue=""
                                            placeholder="College/University Name"
                                            className="form-control w-100"
                                        />
                                    </div>
                                    <div className={styles.buttonWrapper}>
                                        <input type="button" defaultValue="Add"
                                            className="btn btn-success w-50" disabled
                                        />
                                        <input type="button" defaultValue="Cancel"
                                            className="btn btn-secondary w-50 ms-2"
                                            onClick={() => handleSelectSections(3)}
                                        />
                                    </div>
                                </div>
                            )}
                            <div className={styles.emptyList}>
                                Add your Education
                            </div>
                        </section>
                    </div>
                </form>
                <form>
                    <div className={styles.innerRow}>
                        <aside>
                            <h3 title="Listing your honors and awards can help you stand out from other sellers.">
                                Certification
                            </h3>
                            <a className={editSections[4] ? "d-none" : "d-inline-block"}
                                onClick={() => handleSelectSections(4)}
                            >
                                Add New
                            </a>
                        </aside>
                        <section>
                            {editSections[4] && (
                                <div className={styles.formWrapper}>
                                    <div className={styles.inputWrapper}>
                                        <input type="text" maxLength={20} defaultValue=""
                                            placeholder="Certificate/Award (e.g. Adobe)"
                                            className="form-control w-100"
                                        />
                                    </div>
                                    <div className={styles.buttonWrapper}>
                                        <input type="button" defaultValue="Add"
                                            className="btn btn-success w-50" disabled
                                        />
                                        <input type="button" defaultValue="Cancel"
                                            className="btn btn-secondary w-50 ms-2"
                                            onClick={() => handleSelectSections(4)}
                                        />
                                    </div>
                                </div>
                            )}
                            <div className={styles.emptyList}>
                                {userInfo?.certification?.length >= 1 ? `${userInfo?.certification}` : "Add your Certification"}
                            </div>
                        </section>
                    </div>
                </form>
            </article>
        </div>
    );
}

export default BasicInfo;