import React, { useEffect, useState } from 'react';
import styles from "./BasicInfo.module.scss";
import { apiUpdateCertification, apiUpdateSkill } from "../../../apis/userAPI";

function BasicInfo({ userInfo, getUserInfo }) {
    const [description, setDescription] = useState("");
    const [language, setLanguage] = useState("");
    let [skill, setSkill] = useState();
    const [education, setEducation] = useState("");
    let [certification, setCertification] = useState("");
    const [editSections, setEditSections] = useState([]);

    const handleSelectSections = (index) => {
        const editingSections = [...editSections];
        editingSections[index] = !editingSections[index];
        setEditSections(editingSections);
    };

    const handleUpdateDescription = () => {
        setDescription(description);
        handleSelectSections(0);
    };

    const handleUpdateLanguage = () => {
        setLanguage(language);
        handleSelectSections(1);
    };

    const handleUpdateEducation = () => {
        setEducation(education);
        handleSelectSections(3);
    };

    const updateSkill = async () => {
        if (skill) {
            skill = skill.split(", ");
            const updatedSkill = [...userInfo.skill, ...skill];
            console.log(updatedSkill);
            try {
                const data = await apiUpdateSkill(userInfo?.id, userInfo, updatedSkill);
                console.log(data?.content);
            } catch (error) {
                console.log(error.response?.data?.content);
            }
        }
    };

    const handleUpdateSkill = async () => {
        await updateSkill();
        handleSelectSections(2);
        getUserInfo();
    };

    const handleDeleteSkill = async (selectedSkill) => {
        const updatedSkill = userInfo.skill.filter((skill) => skill !== selectedSkill);
        try {
            const data = await apiUpdateSkill(userInfo?.id, userInfo, updatedSkill);
            console.log(data?.content);
        } catch (error) {
            console.log(error.response?.data?.content);
        }
        getUserInfo();
    };

    const updateCertification = async () => {
        if (certification) {
            certification = certification.split(", ");
            const updatedCertification = [...userInfo.certification, ...certification];
            try {
                const data = await apiUpdateCertification(userInfo?.id, userInfo, updatedCertification);
                console.log(data?.content);
            } catch (error) {
                console.log(error.response?.data?.content);
            }
        }
    };

    const handleUpdateCertification = async () => {
        await updateCertification();
        handleSelectSections(4);
        getUserInfo();
    };

    const handleDeleteCertification = async (selectedCertification) => {
        const updatedCertification = userInfo.certification.filter((certification) => certification !== selectedCertification);
        try {
            const data = await apiUpdateCertification(userInfo?.id, userInfo, updatedCertification);
            console.log(data?.content);
        } catch (error) {
            console.log(error.response?.data?.content);
        }
        getUserInfo();
    };

    useEffect(() => {
        handleSelectSections(new Array(5).fill(false));
    }, []);

    return (
        <div>
            <article className={styles.basicInfo}>
                <form>
                    <div className={styles.innerRow}>
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
                                        <textarea maxLength={600} minLength={150} placeholder="Please tell us about any hobbies, additional expertise, or anything else you’d like to add." defaultValue={description}
                                            onChange={(evt) => setDescription(evt.target.value)}>
                                        </textarea>
                                    </div>
                                    <div className="d-flex mt-2">
                                        <input type="button" defaultValue="Update"
                                            className="btn btn-success w-50"
                                            onClick={handleUpdateDescription}
                                        />
                                        <input type="button" defaultValue="Cancel"
                                            className="btn btn-secondary w-50 ms-2"
                                            onClick={() => handleSelectSections(0)}
                                        />
                                    </div>
                                </div>
                            )}
                            {description ?
                                <div className="my-2">{description}</div>
                                :
                                <div className={styles.emptyList}>Add your description</div>
                            }
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
                                Add/Edit
                            </a>
                        </aside>
                        <section>
                            {editSections[1] && (
                                <div className={styles.formWrapper}>
                                    <div className={styles.inputWrapper}>
                                        <input type="text" defaultValue={language} placeholder="Add Languages"
                                            className="form-control w-100"
                                            onChange={(evt) => setLanguage(evt.target.value)}
                                        />
                                    </div>
                                    <div className={styles.buttonWrapper}>
                                        <input type="button" defaultValue="Save"
                                            className="btn btn-success w-50"
                                            onClick={handleUpdateLanguage}
                                        />
                                        <input type="button" defaultValue="Cancel"
                                            className="btn btn-secondary w-50 ms-2"
                                            onClick={() => handleSelectSections(1)}
                                        />
                                    </div>
                                </div>
                            )}
                            {language ?
                                <div className="my-2">{language}</div>
                                :
                                <div className={styles.emptyList}>Add your language</div>
                            }
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
                                Add/Edit
                            </a>
                        </aside>
                        <section>
                            {editSections[2] && (
                                <div className={styles.formWrapper}>
                                    <div className={styles.inputWrapper}>
                                        <input type="text" className="form-control w-100"
                                            placeholder="Add skills (e.g. Programming, Web Design)"
                                            value={skill}
                                            onChange={(evt) => setSkill(evt.target.value)}
                                        />
                                    </div>
                                    <div className={styles.buttonWrapper}>
                                        <input type="button" defaultValue="Save"
                                            className="btn btn-success w-50"
                                            onClick={handleUpdateSkill}
                                        />
                                        <input type="button" defaultValue="Cancel"
                                            className="btn btn-secondary w-50 ms-2"
                                            onClick={() => handleSelectSections(2)}
                                        />
                                    </div>
                                </div>
                            )}
                            {userInfo?.skill?.length >= 1 ?
                                (
                                    <ul className={styles.itemList}>
                                        {userInfo?.skill?.map((skill, index) => {
                                            return (
                                                <li className={styles.skillBubble} key={index}>
                                                    <h4 className={styles.title}>{skill}</h4>
                                                    <div className={styles.animate}>
                                                        <span>
                                                            <a>
                                                                <i className="fa-solid fa-trash-can"
                                                                    onClick={() => handleDeleteSkill(skill)}
                                                                ></i>
                                                            </a>
                                                        </span>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                )
                                :
                                <div className={styles.emptyList}>Add your skills</div>
                            }
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
                                Add/Edit
                            </a>
                        </aside>
                        <section>
                            {editSections[3] && (
                                <div className={styles.formWrapper}>
                                    <div className={styles.inputWrapper}>
                                        <input type="text" defaultValue={education} className="form-control w-100"
                                            placeholder="College/University name"
                                            onChange={(evt) => setEducation(evt.target.value)}
                                        />
                                    </div>
                                    <div className={styles.buttonWrapper}>
                                        <input type="button" defaultValue="Save"
                                            className="btn btn-success w-50"
                                            onClick={handleUpdateEducation}
                                        />
                                        <input type="button" defaultValue="Cancel"
                                            className="btn btn-secondary w-50 ms-2"
                                            onClick={() => handleSelectSections(3)}
                                        />
                                    </div>
                                </div>
                            )}
                            {education ?
                                <div className="my-2">{education}</div>
                                :
                                <div className={styles.emptyList}>Add your education</div>
                            }
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
                                Add/Edit
                            </a>
                        </aside>
                        <section>
                            {editSections[4] && (
                                <div className={styles.formWrapper}>
                                    <div className={styles.inputWrapper}>
                                        <input type="text" className="form-control w-100"
                                            placeholder="MBA, Bachelor Degree of Computer Science"
                                            onChange={(evt) => setCertification(evt.target.value)}
                                        />
                                    </div>
                                    <div className={styles.buttonWrapper}>
                                        <input type="button" defaultValue="Save"
                                            className="btn btn-success w-50"
                                            onClick={handleUpdateCertification}
                                        />
                                        <input type="button" defaultValue="Cancel"
                                            className="btn btn-secondary w-50 ms-2"
                                            onClick={() => handleSelectSections(4)}
                                        />
                                    </div>
                                </div>
                            )}
                            {userInfo?.certification?.length >= 1 ?
                                (
                                    <ul className={styles.itemList}>
                                        {userInfo?.certification?.map((certification, index) => {
                                            return (
                                                <li key={index}>
                                                    <h4 className={styles.title}>
                                                        {certification}
                                                        <div className={styles.animate}>
                                                            <span>
                                                                <a>
                                                                    <i className="fa-solid fa-trash-can ms-2"
                                                                        onClick={() => handleDeleteCertification(certification)}
                                                                    ></i>
                                                                </a>
                                                            </span>
                                                        </div>
                                                    </h4>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                )
                                :
                                <div className={styles.emptyList}>Add your certification</div>
                            }
                        </section>
                    </div>
                </form>
            </article>
        </div>
    );
}

export default BasicInfo;