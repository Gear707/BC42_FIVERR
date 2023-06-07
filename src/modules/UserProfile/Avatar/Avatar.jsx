import React, { useState } from 'react';
import styles from "./Avatar.module.scss";
import { apiUpdateUser, apiUploadAvatar } from "../../../apis/userAPI";

function Avatar({ userInfo, getUserInfo }) {
    const [name, setName] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    const [loading, setLoading] = useState();

    const updateUserInfo = async () => {
        try {
            const data = await apiUpdateUser(userInfo?.id, userInfo, name);
            console.log(data?.content);
        } catch (error) {
            console.log(error.response?.data?.content);
        }
    };

    const handleChangeName = (evt) => {
        setName(evt.target.value);
    };

    const handleUploadAvatar = async (evt) => {
        const selectedImage = evt.target.files[0];

        if (selectedImage) {
            setLoading(true);
            try {
                await apiUploadAvatar(selectedImage);
                getUserInfo();
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }
    };

    const handleEditing = () => {
        setIsEditing(!isEditing);
    };

    const handleUpdate = async () => {
        await updateUserInfo();
        getUserInfo();
        handleEditing();
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
                            {loading ?
                                (<div className={styles.spinner}>
                                    <div className={styles.halfSpinner}></div>
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
                            {isEditing ? (
                                <>
                                    <div className={`mb-2 ${styles.username}`}>
                                        {userInfo?.name}
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center">
                                        <input type="text" value={name} className="form-control w-50"
                                            onChange={handleChangeName}
                                        />
                                        <button className="btn btn-success ms-2"
                                            onClick={handleUpdate}
                                        >
                                            Update
                                        </button>
                                    </div>
                                </>
                            ) : (
                                <span className={styles.username}>
                                    {userInfo?.name}
                                </span>
                            )}

                            {isEditing ? (
                                <div>
                                    <button className="btn btn-secondary mt-3"
                                        onClick={handleEditing}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            ) : (
                                <span className="mt-2" title="Change display name">
                                    <button className={styles.penIcon}
                                        onClick={handleEditing}
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