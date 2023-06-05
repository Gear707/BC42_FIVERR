import React, { useEffect, useState } from 'react';
import "./UserProfile.scss";
import { useSelector } from "react-redux";
import { apiGetUser } from "../../apis/userAPI";
import Avatar from "./Avatar/Avatar";
import BasicInfo from "./BasicInfo/BasicInfo";
import HiredJobs from "./HiredJobs/HiredJobs";
import { useNavigate, useParams } from "react-router-dom";

function UserProfile() {
    const [userInfo, setUserInfo] = useState({});
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const { user } = useSelector((state) => state.user);

    const getUserInfo = async () => {
        try {
            const data = await apiGetUser(user.user.id);
            setUserInfo(data.content);
            console.log(data.content);
        } catch (error) {
            setError(error?.response?.data?.content);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getUserInfo();
    }, []);

    return (
        <div style={{ backgroundColor: "#f7f7f7" }}>
            <div className="container py-5">
                <div className="row justify-content-between">
                    <div className="col-4">
                        <Avatar userInfo={userInfo} />
                        <BasicInfo />
                    </div>
                    <div className="col-7">
                        <HiredJobs />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserProfile;