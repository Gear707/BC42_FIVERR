import React, { useRef, useState } from 'react';
import styles from "./Avatar.module.scss";
import { apiUpdateUser, apiUploadAvatar } from "../../../apis/userAPI";

function Avatar({ userInfo, getUserInfo }) {
    const [name, setName] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    const [loadingAvatar, setLoadingAvatar] = useState(false);
    const [loadingUsername, setLoadingUsername] = useState(false);

    const handleEditing = () => {
        setIsEditing(!isEditing);
    };

    const handleChangeName = (evt) => {
        setName(evt.target.value);
    };

    const handleUploadAvatar = async (evt) => {
        const selectedImage = evt.target.files[0];

        if (selectedImage) {
            setLoadingAvatar(true);
            try {
                await apiUploadAvatar(selectedImage);
                getUserInfo();
            } catch (error) {
                console.log(error);
            } finally {
                setLoadingAvatar(false);
            }
        }
    };

    const updateUsername = async () => {
        if (name) {
            setLoadingUsername(true);
            try {
                const data = await apiUpdateUser(userInfo?.id, userInfo, name);
                console.log(data?.content);
            } catch (error) {
                console.log(error.response?.data?.content);
            } finally {
                setLoadingUsername(false);
            }
        }
    };

    const handleUpdate = async () => {
        handleEditing();
        await updateUsername();
        getUserInfo();
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
                            <input accept="image/png,image/jpeg" type="file" id="profileImage" className="d-none invisible" name="profile[image]"
                                onChange={handleUploadAvatar}
                            />
                            {loadingAvatar ?
                                (<div className={styles.spinnerAvatar}>
                                    <div className={styles.halfSpinnerAvatar}></div>
                                </div>)
                                :
                                (<img className={styles.uploadedAvatar} src={userInfo?.avatar}
                                    alt={userInfo?.name} />)
                            }
                            <span className={styles.profileImage}>
                                {userInfo?.name?.charAt(0).toUpperCase()}
                            </span>
                        </label>
                    </div>
                    <div>
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            {loadingUsername ?
                                (
                                    <div className={styles.spinnerUsername}>
                                        <div className={styles.halfSpinnerUsername}></div>
                                    </div>
                                )
                                :
                                (
                                    <div className={styles.username}>
                                        {userInfo?.name}
                                    </div>
                                )
                            }
                            {isEditing ?
                                (
                                    <>
                                        <div className="d-flex justify-content-center align-items-center">
                                            <input type="text" className="form-control"
                                                onChange={handleChangeName} defaultValue=""
                                            />
                                        </div>
                                        <div className="mt-2">
                                            <button className="btn btn-success"
                                                onClick={handleUpdate} disabled={!name}
                                            >
                                                Update
                                            </button>
                                            <button className="btn btn-secondary ms-3"
                                                onClick={handleEditing}
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </>
                                )
                                :
                                (
                                    <div className={`${loadingUsername ? "d-none" : "d-block"}`}>
                                        <span title="Change display name">
                                            <button className={styles.penIcon}
                                                onClick={handleEditing}
                                            >
                                                <i className="fa-solid fa-pen"></i>
                                            </button>
                                        </span>
                                    </div>
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
        </div >
    );
}

export default Avatar;