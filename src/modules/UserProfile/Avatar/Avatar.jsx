import React from 'react';
import styles from "./Avatar.module.scss";

function Avatar({ userInfo }) {
    console.log(userInfo);

    return (
        <div className="mb-5">
            <div className={styles.userAvatar}>
                <div className={styles.statusLine}>
                    <div className={styles.onlineIndicator}>
                        <i>·</i>Online
                    </div>
                </div>
                <div className="mb-3">
                    <div className="d-flex align-items-center justify-content-center mb-3">
                        <label className={styles.editImage} htmlFor="profileImage"
                        >
                            <div className={styles.cameraWrapper}>
                                <span className={styles.cameraIcon}>
                                    <i className="fa-solid fa-camera-retro"></i>
                                </span>
                            </div>
                            <input accept="image/png,image/jpeg" type="file" id="profileImage" className="d-none invisible" name="profile[image]" />
                            <span className={styles.profileImage}>
                                {userInfo?.name?.charAt(0).toUpperCase()}
                            </span>
                        </label>
                    </div>
                    <div>
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <span className={styles.username}>
                                {userInfo?.name}
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
    );
}

export default Avatar;