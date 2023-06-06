import React, { useState } from 'react';
import styles from "./Avatar.module.scss";
import { apiUpdateUser } from "../../../apis/userAPI";

function Avatar({ userInfo, getUserInfo }) {
    const [name, setName] = useState("");
    const [editingName, setEditingName] = useState(false);

    const updateUserInfo = async () => {
        try {
            const data = await apiUpdateUser(userInfo?.id, userInfo, name);
            console.log(data.content);
        } catch (error) {
            console.log(error.response?.data?.content);
        }
    };

    const handleChangeName = (evt) => {
        setName(evt.target.value);
    };

    const handleEditingName = () => {
        setEditingName(!editingName);
    };

    const handleSubmit = async () => {
        await updateUserInfo();
        getUserInfo();
        setEditingName(!editingName);
    };

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
                            {editingName ? (
                                <>
                                    <div className={`mb-2 ${styles.username}`}>
                                        {userInfo?.name}
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center">
                                        <input type="text" value={name} className="form-control w-50"
                                            onChange={handleChangeName}
                                        />
                                        <button className="btn btn-success ms-2" onClick={handleSubmit}>
                                            Save
                                        </button>
                                    </div>
                                </>
                            ) : (
                                <span className={styles.username}>
                                    {userInfo?.name}
                                </span>
                            )}
                            {/* <span className="mt-2" title="Change display name">
                                <button className={styles.penIcon}
                                    onClick={() => setEditingName(!editingName)}
                                >
                                    <i className="fa-solid fa-pen"></i>
                                </button>
                            </span> */}
                            {editingName ? (
                                <div>
                                    <button className="btn btn-secondary mt-3"
                                        onClick={handleEditingName}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            ) : (
                                <span className="mt-2" title="Change display name">
                                    <button className={styles.penIcon}
                                        onClick={handleEditingName}
                                    >
                                        <i className="fa-solid fa-pen"></i>
                                    </button>
                                </span>
                            )}
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